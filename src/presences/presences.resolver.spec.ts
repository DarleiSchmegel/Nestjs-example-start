import { Test, TestingModule } from '@nestjs/testing';
import { PresencesResolver } from './presences.resolver';
import { PresencesService } from './presences.service';

describe('PresencesResolver', () => {
  let resolver: PresencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresencesResolver, PresencesService],
    }).compile();

    resolver = module.get<PresencesResolver>(PresencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
