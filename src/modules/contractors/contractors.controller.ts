import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Request,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ContractorsService } from './services/contractors.service';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { UpdateContractorDto } from './dto/update-contractor.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportContractorsDto } from './dto/import-contractors.dto';
import { ExcelImportService } from './services/excel-import.service';

@ApiTags('contractors')
@Controller('contractors')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class ContractorsController {
  constructor(
    private readonly contractorsService: ContractorsService,
    private readonly excelImportService: ExcelImportService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Create a new contractor' })
  @ApiResponse({
    status: 201,
    description: 'The contractor has been successfully created.',
  })
  create(@Body() createContractorDto: CreateContractorDto) {
    return this.contractorsService.create(createContractorDto);
  }

  @Post('import')
  @Roles(UserRole.USER)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Import contractors from Excel file' })
  @ApiBody({
    description: 'Excel file with contractor data',
    type: ImportContractorsDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Import results summary',
    schema: {
      type: 'object',
      properties: {
        imported: {
          type: 'number',
          description: 'Number of contractors imported',
        },
        skipped: {
          type: 'number',
          description: 'Number of contractors skipped',
        },
        errors: {
          type: 'array',
          items: { type: 'string' },
          description: 'List of errors encountered',
        },
      },
    },
  })
  async importContractors(
    @UploadedFile() file: Express.Multer.File,
    @Body() importDto: ImportContractorsDto,
  ) {
    // Parse Excel file
    const contractors = this.excelImportService.parseExcelFile(file);

    // Import contractors
    return this.excelImportService.importContractors(
      contractors,
      importDto.defaultPassword,
    );
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.USER)
  @ApiOperation({ summary: 'Get all contractors' })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by name (searches first and last names)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all contractors.',
  })
  findAll(@Query('name') name?: string) {
    return this.contractorsService.findAll({ name });
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.USER)
  @ApiOperation({ summary: 'Get a contractor by ID' })
  @ApiParam({ name: 'id', description: 'Contractor ID' })
  @ApiResponse({
    status: 200,
    description: 'The contractor details.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contractor not found.',
  })
  findOne(@Param('id') id: string) {
    return this.contractorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.USER)
  @ApiOperation({ summary: 'Update a contractor' })
  @ApiParam({ name: 'id', description: 'Contractor ID' })
  @ApiResponse({
    status: 200,
    description: 'The contractor has been successfully updated.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contractor not found.',
  })
  update(
    @Param('id') id: string,
    @Body() updateContractorDto: UpdateContractorDto,
  ) {
    return this.contractorsService.update(id, updateContractorDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete a contractor' })
  @ApiParam({ name: 'id', description: 'Contractor ID' })
  @ApiResponse({
    status: 200,
    description: 'The contractor has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contractor not found.',
  })
  remove(@Param('id') id: string) {
    return this.contractorsService.remove(id);
  }

  @Get(':id/forms')
  @Roles(UserRole.ADMIN, UserRole.USER)
  @ApiOperation({ summary: 'Get forms assigned to a contractor' })
  @ApiParam({ name: 'id', description: 'Contractor ID' })
  @ApiResponse({
    status: 200,
    description: 'List of forms assigned to the contractor.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contractor not found.',
  })
  getAssignedForms(@Param('id') id: string) {
    return this.contractorsService.getAssignedForms(id);
  }

  // Contractors can view their own profile
  @Get('profile/me')
  @Roles(UserRole.CONTRACTOR)
  @ApiOperation({ summary: 'Get own contractor profile' })
  @ApiResponse({
    status: 200,
    description: 'The contractor profile.',
  })
  getOwnProfile(@Request() req) {
    return this.contractorsService.findOne(req.user.id);
  }

  // Contractors can view their own assigned forms
  @Get('forms/assigned')
  @Roles(UserRole.CONTRACTOR)
  @ApiOperation({ summary: 'Get forms assigned to the contractor' })
  @ApiResponse({
    status: 200,
    description: 'List of forms assigned to the contractor.',
  })
  getOwnAssignedForms(@Request() req) {
    return this.contractorsService.getAssignedForms(req.user.id);
  }
}
