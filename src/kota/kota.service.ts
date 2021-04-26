import { Injectable } from '@nestjs/common';
import { CreateKotaDto } from './dto/create-kota.dto';
import { UpdateKotaDto } from './dto/update-kota.dto';

@Injectable()
export class KotaService {
  create(createKotaDto: CreateKotaDto) {
    return 'This action adds a new kota';
  }

  findAll() {
    return `This action returns all kota`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kota`;
  }

  update(id: number, updateKotaDto: UpdateKotaDto) {
    return `This action updates a #${id} kota`;
  }

  remove(id: number) {
    return `This action removes a #${id} kota`;
  }
}
