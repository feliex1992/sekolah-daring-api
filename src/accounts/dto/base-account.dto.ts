import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BaseAccountDto {
  @IsString() 
  @IsNotEmpty()
  @IsDefined()
  @Transform((userName) => userName.value.toLowerCase())
  @ApiProperty({ example: "user_name" })
  user_name: string;

  @IsString() 
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ example: "yyyy-MM-dd" })
  birth_date: string;
}