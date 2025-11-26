import { PartialType } from '@nestjs/mapped-types';
import { CreateCallStatusDto } from './create-call_status.dto';

export class UpdateCallStatusDto extends PartialType(CreateCallStatusDto) {}
