import { PartialType } from '@nestjs/mapped-types';
import { CreateGeographicZoneDto } from './create-geographic_zone.dto';

export class UpdateGeographicZoneDto extends PartialType(CreateGeographicZoneDto) {}
