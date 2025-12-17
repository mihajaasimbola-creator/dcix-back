import { PartialType } from '@nestjs/mapped-types';
import { CreateGeographicZoneDto } from './create-geographic_zone.dto';

export class UpdateGeographicZoneDto extends PartialType(
  CreateGeographicZoneDto,
) {
  id?: number;
  designation: string;
  location_perimetters: string;
  location_middle: string;
}
