import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GeographicZoneService } from './geographic_zone.service';
import { CreateGeographicZoneDto } from './dto/create-geographic_zone.dto';
import { UpdateGeographicZoneDto } from './dto/update-geographic_zone.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('geographic-zone')
export class GeographicZoneController {
  constructor(private readonly geographicZoneService: GeographicZoneService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  create(@Body() createGeographicZoneDto: CreateGeographicZoneDto[]) {
    return this.geographicZoneService.create(createGeographicZoneDto);
  }

  @Get()
  findAll() {
    return this.geographicZoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geographicZoneService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGeographicZoneDto: UpdateGeographicZoneDto,
  ) {
    return this.geographicZoneService.update(+id, updateGeographicZoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geographicZoneService.remove(+id);
  }
}
