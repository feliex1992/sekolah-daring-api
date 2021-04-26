import { Module } from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { SekolahController } from './sekolah.controller';

@Module({
  controllers: [SekolahController],
  providers: [SekolahService]
})
export class SekolahModule {}
