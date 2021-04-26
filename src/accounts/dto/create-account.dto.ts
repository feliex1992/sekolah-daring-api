import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseAccountDto } from './base-account.dto';

export class CreateAccountDto extends BaseAccountDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ example: "user_name" })
  user_id: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ example: "password" })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ example: "retype_password" })
  retype_password: string;
}
