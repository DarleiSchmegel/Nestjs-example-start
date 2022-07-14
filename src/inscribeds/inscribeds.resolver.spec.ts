import { Test, TestingModule } from '@nestjs/testing';
import { InscribedsResolver } from './inscribeds.resolver';
import { InscribedsService } from './inscribeds.service';

describe('InscribedsResolver', () => {
  let resolver: InscribedsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscribedsResolver, InscribedsService],
    }).compile();

    resolver = module.get<InscribedsResolver>(InscribedsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
