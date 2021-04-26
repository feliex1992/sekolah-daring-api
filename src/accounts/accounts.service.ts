import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountRepository } from './repositories/account.repository';

@Injectable()
export class AccountsService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async create(createAccountDto: CreateAccountDto) {
    const newDataAccount = {
      ...createAccountDto,
      created_date: new Date()
    }

    const result = await this.accountRepository.create(newDataAccount)
    return result;
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
