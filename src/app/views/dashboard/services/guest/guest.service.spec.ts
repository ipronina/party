import { TestBed } from '@angular/core/testing';

import { GuestService } from './guest.service';
import { GuestsService } from '../guests';

describe('GuestService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GuestService, GuestsService],
    }),
  );

  it('should be created', () => {
    const service: GuestService = TestBed.get(GuestService);
    expect(service).toBeTruthy();
  });
});
