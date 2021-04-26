import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../schemas/account.schema';

@Injectable()
export class AccountRepository {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

  async create(newDataAccount: any) {
    const newAccount = new this.accountModel(newDataAccount);
    await newAccount.save();
    return 'Create new account success.';
  }
}
