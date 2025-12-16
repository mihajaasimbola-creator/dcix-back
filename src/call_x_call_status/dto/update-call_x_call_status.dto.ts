import { PartialType } from '@nestjs/mapped-types';
import { CreateCallXCallStatusDto } from './create-call_x_call_status.dto';

export class UpdateCallXCallStatusDto extends PartialType(
  CreateCallXCallStatusDto,
) {}
