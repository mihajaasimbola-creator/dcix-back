import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CallStatusService } from './call_status.service';
import { CreateCallStatusDto } from './dto/create-call_status.dto';
import { UpdateCallStatusDto } from './dto/update-call_status.dto';

@Controller('call-status')
export class CallStatusController {
  constructor(private readonly callStatusService: CallStatusService) {}

  @Post()
  create(@Body() createCallStatusDto: CreateCallStatusDto) {
    return this.callStatusService.create(createCallStatusDto);
  }

  @Get()
  findAll() {
    return this.callStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.callStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCallStatusDto: UpdateCallStatusDto) {
    return this.callStatusService.update(+id, updateCallStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callStatusService.remove(+id);
  }
}
