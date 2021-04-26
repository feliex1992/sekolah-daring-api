import { Injectable } from '@nestjs/common';
import { CreateSekolahDto } from './dto/create-sekolah.dto';
import { UpdateSekolahDto } from './dto/update-sekolah.dto';

@Injectable()
export class SekolahService {
  create(createSekolahDto: CreateSekolahDto) {
    return 'This action adds a new sekolah';
  }

  findAll() {
    return `This action returns all sekolah`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sekolah`;
  }

  update(id: number, updateSekolahDto: UpdateSekolahDto) {
    return `This action updates a #${id} sekolah`;
  }

  remove(id: number) {
    return `This action removes a #${id} sekolah`;
  }
}
