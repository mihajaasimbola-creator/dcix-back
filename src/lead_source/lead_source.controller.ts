import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadSourceService } from './lead_source.service';
import { CreateLeadSourceDto } from './dto/create-lead_source.dto';
import { UpdateLeadSourceDto } from './dto/update-lead_source.dto';

@Controller('lead-source')
export class LeadSourceController {
  constructor(private readonly leadSourceService: LeadSourceService) {}

  @Post()
  create(@Body() createLeadSourceDto: CreateLeadSourceDto) {
    return this.leadSourceService.create(createLeadSourceDto);
  }

  @Get()
  findAll() {
    return this.leadSourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeadSourceDto: UpdateLeadSourceDto) {
    return this.leadSourceService.update(+id, updateLeadSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadSourceService.remove(+id);
  }
}
