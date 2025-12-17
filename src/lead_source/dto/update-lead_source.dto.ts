import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadSourceDto } from './create-lead_source.dto';

export class UpdateLeadSourceDto extends PartialType(CreateLeadSourceDto) {
  id: number;
  name: string;
  email: string;
  telephone: string;
  note: string;
  site_url: string;
}
