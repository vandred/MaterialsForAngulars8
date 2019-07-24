import { TestBed, async, inject } from '@angular/core/testing';

import { ChekUserGuard } from './chek-user.guard';

describe('ChekUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChekUserGuard]
    });
  });

  it('should ...', inject([ChekUserGuard], (guard: ChekUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
