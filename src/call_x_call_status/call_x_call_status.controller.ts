import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CallXCallStatusService } from './call_x_call_status.service';
import { CreateCallXCallStatusDto } from './dto/create-call_x_call_status.dto';
import { UpdateCallXCallStatusDto } from './dto/update-call_x_call_status.dto';

@Controller('call-x-call-status')
export class CallXCallStatusController {
  constructor(
    private readonly callXCallStatusService: CallXCallStatusService,
  ) {}

  @Post()
  create(@Body() createCallXCallStatusDto: CreateCallXCallStatusDto) {
    return this.callXCallStatusService.create(createCallXCallStatusDto);
  }

  @Get()
  findAll() {
    return this.callXCallStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.callXCallStatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCallXCallStatusDto: UpdateCallXCallStatusDto,
  ) {
    return this.callXCallStatusService.update(+id, updateCallXCallStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callXCallStatusService.remove(+id);
  }
}
