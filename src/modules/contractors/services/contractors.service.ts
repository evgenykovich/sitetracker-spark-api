import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma.service';
import { CreateContractorDto } from '../dto/create-contractor.dto';
import { UpdateContractorDto } from '../dto/update-contractor.dto';
import { UserRole } from '@prisma/client';

@Injectable()
export class ContractorsService {
  private readonly logger = new Logger(ContractorsService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new contractor user
   */
  async create(createContractorDto: CreateContractorDto) {
    this.logger.log(`Creating new contractor: ${createContractorDto.email}`);

    return this.prisma.user.create({
      data: {
        ...createContractorDto,
        role: UserRole.CONTRACTOR,
      },
    });
  }

  /**
   * Find all contractors
   */
  async findAll(filters?: { name?: string }) {
    const query: any = {
      where: {
        role: UserRole.CONTRACTOR,
      },
    };

    // Add name filter if provided
    if (filters?.name) {
      query.where.OR = [
        { firstName: { contains: filters.name, mode: 'insensitive' } },
        { lastName: { contains: filters.name, mode: 'insensitive' } },
      ];
    }

    // Get all contractors and TypeScript knows the correct type
    type ContractorWithCounts = {
      id: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      createdAt: Date;
      fullName: string;
      assignedFormsCount: number;
      completedFormsCount: number;
      pendingFormsCount: number;
    };

    const contractors = await this.prisma.user.findMany({
      ...query,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        // Get statistics on assigned forms
        assignedForms: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });

    // Map to the type we want with computed properties
    const result: ContractorWithCounts[] = contractors.map(
      (contractor: any) => ({
        id: contractor.id,
        email: contractor.email,
        firstName: contractor.firstName,
        lastName: contractor.lastName,
        createdAt: contractor.createdAt,
        fullName: [contractor.firstName, contractor.lastName]
          .filter(Boolean)
          .join(' '),
        assignedFormsCount: contractor.assignedForms?.length || 0,
        completedFormsCount:
          contractor.assignedForms?.filter((f: any) => f.status === 'COMPLETED')
            .length || 0,
        pendingFormsCount:
          contractor.assignedForms?.filter(
            (f: any) => f.status === 'PENDING' || f.status === 'ACCEPTED',
          ).length || 0,
      }),
    );

    return result;
  }

  /**
   * Find a contractor by ID
   */
  async findOne(id: string) {
    const contractor = await this.prisma.user.findFirst({
      where: {
        id,
        role: UserRole.CONTRACTOR,
      },
      include: {
        assignedForms: {
          include: {
            form: {
              select: {
                id: true,
                title: true,
                description: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });

    if (!contractor) {
      throw new NotFoundException(`Contractor with ID ${id} not found`);
    }

    return {
      ...contractor,
      fullName: [contractor.firstName, contractor.lastName]
        .filter(Boolean)
        .join(' '),
      password: undefined, // Remove password from response
    };
  }

  /**
   * Update a contractor
   */
  async update(id: string, updateContractorDto: UpdateContractorDto) {
    // First check if contractor exists
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data: updateContractorDto,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  /**
   * Delete a contractor
   */
  async remove(id: string) {
    // First check if contractor exists
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Get assigned forms for a contractor
   */
  async getAssignedForms(contractorId: string) {
    // First check if contractor exists
    await this.findOne(contractorId);

    return this.prisma.formAssignment.findMany({
      where: {
        userId: contractorId,
      },
      include: {
        form: {
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
      orderBy: {
        assignedAt: 'desc',
      },
    });
  }
}
