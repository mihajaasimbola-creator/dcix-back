import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LeadSourceService } from './lead_source.service';
import { CreateLeadSourceDto } from './dto/create-lead_source.dto';
import { UpdateLeadSourceDto } from './dto/update-lead_source.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('lead-source')
export class LeadSourceController {
  constructor(private readonly leadSourceService: LeadSourceService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  create(@Body() createLeadSourceDto: CreateLeadSourceDto[]) {
    return this.leadSourceService.create(createLeadSourceDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  findAll() {
    return this.leadSourceService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  findOne(@Param('id') id: string) {
    return this.leadSourceService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  update(
    @Param('id') id: string,
    @Body() updateLeadSourceDto: UpdateLeadSourceDto,
  ) {
    return this.leadSourceService.update(+id, updateLeadSourceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  remove(@Param('id') id: string) {
    return this.leadSourceService.remove(+id);
  }
}
