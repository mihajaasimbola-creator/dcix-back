import { Module } from '@nestjs/common';
import { CallStatusService } from './call_status.service';
import { CallStatusController } from './call_status.controller';

@Module({
  controllers: [CallStatusController],
  providers: [CallStatusService],
})
export class CallStatusModule {}
