import { TestBed, async, inject } from '@angular/core/testing';

import { EnterOutGuard } from './enter-out.guard';

describe('EnterOutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterOutGuard]
    });
  });

  it('should ...', inject([EnterOutGuard], (guard: EnterOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
