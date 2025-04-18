import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssignFormDto } from './dto/assign-form.dto';
import { UpdateAssignmentStatusDto } from './dto/update-assignment-status.dto';

@ApiTags('forms')
@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new form' })
  @ApiResponse({ status: 201, description: 'Form created successfully' })
  create(@Body() createFormDto: CreateFormDto, @Request() req) {
    return this.formsService.create(createFormDto, req.user.id);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all forms' })
  @ApiResponse({ status: 200, description: 'Return all forms' })
  findAll(@Request() req) {
    return this.formsService.findAll(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a form by id' })
  @ApiResponse({ status: 200, description: 'Return the form' })
  @ApiResponse({ status: 404, description: 'Form not found' })
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a form' })
  @ApiResponse({ status: 200, description: 'Form updated successfully' })
  @ApiResponse({ status: 404, description: 'Form not found' })
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formsService.update(id, updateFormDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a form' })
  @ApiResponse({ status: 200, description: 'Form deleted successfully' })
  @ApiResponse({ status: 404, description: 'Form not found' })
  remove(@Param('id') id: string) {
    return this.formsService.remove(id);
  }

  @Post(':id/submit')
  @ApiOperation({ summary: 'Submit a form response' })
  @ApiResponse({
    status: 201,
    description: 'Form response submitted successfully',
  })
  @ApiResponse({ status: 404, description: 'Form not found' })
  submitResponse(
    @Param('id') id: string,
    @Body() submitFormDto: SubmitFormResponseDto,
    @Request() req,
  ) {
    const userId = req.user?.id; // Optional: authenticated user
    return this.formsService.submitResponse(id, submitFormDto, userId);
  }

  @Post(':id/assign')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Assign a form to one or more users' })
  @ApiResponse({ status: 201, description: 'Form successfully assigned' })
  @ApiResponse({
    status: 400,
    description: 'Invalid form ID or assignment data',
  })
  @ApiResponse({ status: 404, description: 'Form not found' })
  assignForm(
    @Param('id') id: string,
    @Body() assignFormDto: AssignFormDto,
    @Request() req,
  ) {
    return this.formsService.assignForm(id, assignFormDto, req.user.id);
  }

  @Get(':id/assignments')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all assignments for a form' })
  @ApiResponse({
    status: 200,
    description: 'Return all assignments for the form',
  })
  @ApiResponse({ status: 404, description: 'Form not found' })
  getFormAssignments(@Param('id') id: string) {
    return this.formsService.getFormAssignments(id);
  }

  @Get('assignments/me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all forms assigned to the current user' })
  @ApiResponse({
    status: 200,
    description: 'Return all forms assigned to the user',
  })
  getMyAssignments(@Request() req) {
    return this.formsService.getUserAssignments(req.user.id);
  }

  @Patch('assignments/:id/status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update the status of a form assignment' })
  @ApiResponse({
    status: 200,
    description: 'Assignment status updated successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid assignment ID or status' })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  updateAssignmentStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateAssignmentStatusDto,
    @Request() req,
  ) {
    return this.formsService.updateAssignmentStatus(
      id,
      updateStatusDto.status,
      req.user.id,
    );
  }

  @Delete('assignments/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove a form assignment' })
  @ApiResponse({ status: 200, description: 'Assignment successfully removed' })
  @ApiResponse({
    status: 400,
    description: 'Not authorized to remove this assignment',
  })
  @ApiResponse({ status: 404, description: 'Assignment not found' })
  removeAssignment(@Param('id') id: string, @Request() req) {
    return this.formsService.removeAssignment(id, req.user.id);
  }
}
