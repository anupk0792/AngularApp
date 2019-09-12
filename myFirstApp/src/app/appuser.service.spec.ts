import { TestBed } from '@angular/core/testing';

import { AppuserService } from './appuser.service';

describe('AppuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppuserService = TestBed.get(AppuserService);
    expect(service).toBeTruthy();
  });
});
