import { PartialType } from '@nestjs/swagger';
import { CreateSekolahDto } from './create-sekolah.dto';

export class UpdateSekolahDto extends PartialType(CreateSekolahDto) {}
