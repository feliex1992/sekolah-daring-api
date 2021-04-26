import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AccountsModule } from './accounts/accounts.module';
import { SekolahModule } from './sekolah/sekolah.module';
import { ProvinsiModule } from './provinsi/provinsi.module';
import { KotaModule } from './kota/kota.module';
import { KecamatanModule } from './kecamatan/kecamatan.module';

const mongooseOption = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  retryWrites: true
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URLDB_API, mongooseOption),

    AccountsModule, 
    SekolahModule, 
    ProvinsiModule, 
    KotaModule, 
    KecamatanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
