import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { SalesforceFormService } from '../salesforce/services/salesforce-form.service';
import { LoggerService } from '../../common/services/logger.service';
import { KafkaService } from '../../common/services/kafka.service';
import { AssignFormDto } from './dto/assign-form.dto';

@Injectable()
export class FormsService {
  private readonly logger = new LoggerService(FormsService.name);

  constructor(
    private prisma: PrismaService,
    private salesforceFormService: SalesforceFormService,
    private kafkaService: KafkaService,
  ) {}

  async create(createFormDto: CreateFormDto, userId: string) {
    this.logger.log(`Creating new form for user ${userId}`);

    // Remove assigneeIds from the DTO as it's not part of the Form model
    const { assigneeIds, assignmentDueDate, ...formData } = createFormDto;

    // Start a transaction to create the form and its assignments
    const form = await this.prisma.$transaction(async (tx) => {
      // Create the form
      const newForm = await tx.form.create({
        data: {
          ...formData,
          createdById: userId,
          formItems: {
            create: formData.formItems.map((item, index) => ({
              ...item,
              order: index,
            })),
          },
        },
        include: {
          formItems: true,
        },
      });

      this.logger.log(`Created form with ID ${newForm.id}`);

      // If assignees are specified and the form is published, create assignments
      if (assigneeIds?.length && newForm.status === 'PUBLISHED') {
        this.logger.log(
          `Assigning form ${newForm.id} to ${assigneeIds.length} users during creation`,
        );

        // Create assignments for each user
        await Promise.all(
          assigneeIds.map(async (assigneeId) => {
            try {
              // Verify the user exists
              const user = await tx.user.findUnique({
                where: { id: assigneeId },
              });

              if (!user) {
                this.logger.warn(
                  `User with ID ${assigneeId} not found, skipping assignment`,
                );
                return;
              }

              // Create the assignment
              await tx.formAssignment.create({
                data: {
                  formId: newForm.id,
                  userId: assigneeId,
                  assignedById: userId,
                  status: 'PENDING' as any,
                  dueDate: assignmentDueDate
                    ? new Date(assignmentDueDate)
                    : undefined,
                },
              });

              this.logger.log(
                `Form ${newForm.id} assigned to user ${assigneeId}`,
              );
            } catch (error) {
              this.logger.error(
                `Error assigning form to user ${assigneeId}:`,
                error.stack,
              );
              // Don't fail the whole transaction for an assignment failure
            }
          }),
        );
      } else if (assigneeIds?.length && newForm.status !== 'PUBLISHED') {
        this.logger.warn(
          `Form ${newForm.id} not published, cannot assign to users`,
        );
      }

      return newForm;
    });

    // If form is imported from Salesforce, queue sync job
    if (form.salesforceId) {
      this.logger.log(`Queueing Salesforce sync for form ${form.id}`);
      await this.kafkaService.syncFormToSalesforce(form.id, form.salesforceId);
    }

    return form;
  }

  async findAll(userId: string) {
    this.logger.log(`Fetching all forms for user ${userId}`);
    return this.prisma.form.findMany({
      where: {
        createdById: userId,
      },
      include: {
        formItems: {
          orderBy: {
            order: 'asc',
          },
        },
        _count: {
          select: {
            formResponses: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    this.logger.log(`Fetching form with ID ${id}`);
    const form = await this.prisma.form.findUnique({
      where: { id },
      include: {
        formItems: {
          orderBy: {
            order: 'asc',
          },
        },
      },
    });

    if (!form) {
      this.logger.warn(`Form with ID ${id} not found`);
      throw new NotFoundException(`Form with ID ${id} not found`);
    }

    return form;
  }

  async update(id: string, updateFormDto: UpdateFormDto) {
    this.logger.log(`Updating form with ID ${id}`);
    try {
      const form = await this.prisma.form.update({
        where: { id },
        data: {
          ...updateFormDto,
          formItems: {
            deleteMany: {},
            create: updateFormDto.formItems?.map((item, index) => ({
              ...item,
              order: index,
            })),
          },
        },
        include: {
          formItems: true,
        },
      });

      this.logger.log(`Updated form with ID ${id}`);

      if (form.salesforceId) {
        this.logger.log(`Queueing Salesforce sync for updated form ${id}`);
        await this.kafkaService.syncFormToSalesforce(
          form.id,
          form.salesforceId,
        );
      }

      return form;
    } catch (error) {
      this.logger.error(`Error updating form with ID ${id}`, error.stack);
      throw new NotFoundException(`Form with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    this.logger.log(`Removing form with ID ${id}`);
    try {
      const form = await this.prisma.form.delete({
        where: { id },
      });

      if (form.salesforceId) {
        this.logger.log(`Queueing Salesforce delete for form ${id}`);
        await this.kafkaService.deleteFormFromSalesforce(form.salesforceId);
      }
    } catch (error) {
      this.logger.error(`Error deleting form with ID ${id}`, error.stack);
      throw new NotFoundException(`Form with ID ${id} not found`);
    }
  }

  async submitResponse(
    id: string,
    submitFormDto: SubmitFormResponseDto,
    userId?: string,
  ) {
    this.logger.log(
      `Submitting response for form ${id}${userId ? ` by user ${userId}` : ''}`,
    );
    const form = await this.findOne(id);

    const response = await this.prisma.formResponse.create({
      data: {
        formId: form.id,
        submittedById: userId,
        items: {
          create: submitFormDto.items.map((item) => ({
            formItemId: item.formItemId,
            value: item.value,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    this.logger.log(`Created response with ID ${response.id} for form ${id}`);

    if (form.salesforceId) {
      this.logger.log(`Queueing Salesforce sync for response ${response.id}`);
      await this.kafkaService.syncResponseToSalesforce(
        response.id,
        form.id,
        form.salesforceId,
      );
    }

    return response;
  }

  // New methods for form assignments
  async assignForm(
    formId: string,
    assignFormDto: AssignFormDto,
    assignedById: string,
  ) {
    this.logger.log(
      `Assigning form ${formId} to ${assignFormDto.userIds.length} users`,
    );

    // Verify the form exists
    const form = await this.findOne(formId);

    // Verify the form is published
    if (form.status !== 'PUBLISHED') {
      throw new BadRequestException('Only published forms can be assigned');
    }

    try {
      // Create assignments for each user
      const assignments = await Promise.all(
        assignFormDto.userIds.map(async (userId) => {
          // Check if user exists
          const user = await this.prisma.user.findUnique({
            where: { id: userId },
          });

          if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
          }

          // Create or update the assignment
          return this.prisma.formAssignment.upsert({
            where: {
              formId_userId: {
                formId: form.id,
                userId,
              },
            },
            update: {
              assignedById,
              status: 'PENDING' as any,
              dueDate: assignFormDto.dueDate
                ? new Date(assignFormDto.dueDate)
                : undefined,
              completedAt: null,
            },
            create: {
              formId: form.id,
              userId,
              assignedById,
              status: 'PENDING' as any,
              dueDate: assignFormDto.dueDate
                ? new Date(assignFormDto.dueDate)
                : undefined,
            },
          });
        }),
      );

      this.logger.log(
        `Successfully assigned form ${formId} to ${assignments.length} users`,
      );

      // Send notification via Kafka if needed
      if (form.salesforceId) {
        this.logger.log(
          `Queueing Salesforce notifications for form assignments`,
        );
        // Implementation pending based on your Kafka service capabilities
      }

      return assignments;
    } catch (error) {
      this.logger.error(`Error assigning form ${formId}`, error.stack);
      throw error;
    }
  }

  async getFormAssignments(formId: string) {
    this.logger.log(`Getting assignments for form ${formId}`);

    // Verify the form exists
    await this.findOne(formId);

    return this.prisma.formAssignment.findMany({
      where: {
        formId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
          },
        },
        assignedBy: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  async getUserAssignments(userId: string) {
    this.logger.log(`Getting form assignments for user ${userId}`);

    return this.prisma.formAssignment.findMany({
      where: {
        userId,
      },
      include: {
        form: {
          include: {
            _count: {
              select: {
                formItems: true,
              },
            },
          },
        },
        assignedBy: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  async updateAssignmentStatus(
    assignmentId: string,
    status: string,
    userId: string,
  ) {
    this.logger.log(`Updating assignment ${assignmentId} status to ${status}`);

    // Validate status
    const validStatuses = [
      'PENDING',
      'ACCEPTED',
      'REJECTED',
      'COMPLETED',
      'EXPIRED',
    ];
    if (!validStatuses.includes(status)) {
      throw new BadRequestException(
        `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      );
    }

    // Find the assignment
    const assignment = await this.prisma.formAssignment.findUnique({
      where: { id: assignmentId },
      include: {
        form: true,
      },
    });

    if (!assignment) {
      throw new NotFoundException(
        `Assignment with ID ${assignmentId} not found`,
      );
    }

    // Check if the user is authorized to update this assignment
    // User must be either the assignee or the one who assigned it
    if (assignment.userId !== userId && assignment.assignedById !== userId) {
      throw new BadRequestException('Not authorized to update this assignment');
    }

    // Update the assignment status
    const updatedAssignment = await this.prisma.formAssignment.update({
      where: { id: assignmentId },
      data: {
        status: status as any,
        completedAt:
          status === 'COMPLETED' ? new Date() : assignment.completedAt,
      },
      include: {
        form: true,
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Optionally send notification via Kafka
    if (assignment.form.salesforceId) {
      this.logger.log(`Queueing Salesforce notification for assignment update`);
      // Implementation pending based on your Kafka service capabilities
    }

    return updatedAssignment;
  }

  async removeAssignment(assignmentId: string, userId: string) {
    this.logger.log(`Removing assignment ${assignmentId}`);

    // Find the assignment
    const assignment = await this.prisma.formAssignment.findUnique({
      where: { id: assignmentId },
    });

    if (!assignment) {
      throw new NotFoundException(
        `Assignment with ID ${assignmentId} not found`,
      );
    }

    // Check if the user is authorized to remove this assignment
    // Only the one who assigned it can remove it
    if (assignment.assignedById !== userId) {
      throw new BadRequestException('Not authorized to remove this assignment');
    }

    // Delete the assignment
    await this.prisma.formAssignment.delete({
      where: { id: assignmentId },
    });

    return { success: true };
  }
}
