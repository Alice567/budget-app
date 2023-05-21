import { TestBed } from '@angular/core/testing';

import { BudgetsApiService } from './budgets-api.service';

describe('BudgetsApiService', () => {
  let service: BudgetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
