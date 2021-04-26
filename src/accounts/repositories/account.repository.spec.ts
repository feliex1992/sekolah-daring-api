import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from './account.repository';

describe('AccountRepository', () => {
  let repository: AccountRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRepository],
    }).compile();

    repository = module.get<AccountRepository>(AccountRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
