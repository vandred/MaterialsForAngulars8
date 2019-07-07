import { TestBed, async, inject } from '@angular/core/testing';

import { EnterInGuard } from './enter-in.guard';

describe('EnterInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterInGuard]
    });
  });

  it('should ...', inject([EnterInGuard], (guard: EnterInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
