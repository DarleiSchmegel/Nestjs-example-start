import { Test, TestingModule } from '@nestjs/testing';
import { InscribedsService } from './inscribeds.service';

describe('InscribedsService', () => {
  let service: InscribedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscribedsService],
    }).compile();

    service = module.get<InscribedsService>(InscribedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
