import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { SalesforceFormService } from '../salesforce/services/salesforce-form.service';
import { LoggerService } from '../../common/services/logger.service';
import { KafkaService } from '../../common/services/kafka.service';

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

    const form = await this.prisma.form.create({
      data: {
        ...createFormDto,
        createdById: userId,
        formItems: {
          create: createFormDto.formItems.map((item, index) => ({
            ...item,
            order: index,
          })),
        },
      },
      include: {
        formItems: true,
      },
    });

    this.logger.log(`Created form with ID ${form.id}`);

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
}
