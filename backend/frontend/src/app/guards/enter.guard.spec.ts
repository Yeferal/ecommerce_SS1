import { TestBed } from '@angular/core/testing';

import { EnterGuard } from './enter.guard';

describe('EnterGuard', () => {
  let guard: EnterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
