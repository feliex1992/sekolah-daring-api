import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KotaService } from './kota.service';
import { CreateKotaDto } from './dto/create-kota.dto';
import { UpdateKotaDto } from './dto/update-kota.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Kota')
@Controller('kota')
export class KotaController {
  constructor(private readonly kotaService: KotaService) {}

  @Post()
  create(@Body() createKotaDto: CreateKotaDto) {
    return this.kotaService.create(createKotaDto);
  }

  @Get()
  findAll() {
    return this.kotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kotaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKotaDto: UpdateKotaDto) {
    return this.kotaService.update(+id, updateKotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kotaService.remove(+id);
  }
}
