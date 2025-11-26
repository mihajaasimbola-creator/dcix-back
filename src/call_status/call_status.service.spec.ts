import { Test, TestingModule } from '@nestjs/testing';
import { CallStatusService } from './call_status.service';

describe('CallStatusService', () => {
  let service: CallStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallStatusService],
    }).compile();

    service = module.get<CallStatusService>(CallStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
