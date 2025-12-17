import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadDto } from './create-lead.dto';

export class UpdateLeadDto extends PartialType(CreateLeadDto) {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  geographic_zone_id: number;
  lead_source: number;
}
