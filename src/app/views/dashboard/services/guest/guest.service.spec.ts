import { TestBed, inject } from '@angular/core/testing';

import { GuestService } from './guest.service';
import { GuestsService } from '../guests';
import { IGuest } from 'src/app/models';

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

  it('should called function for updating guests value', inject(
    [GuestService, GuestsService],
    (gstService: GuestService, gstsService: GuestsService) => {
      gstsService.updateGuests = jasmine.createSpy();
      // const guest = {} as IGuest;
      // const guests$ = {
      //   getValue: () => {
      //     return { 1: {} };
      //   },
      // } as any;
      // expect(gstsService.guestsValue).toEqual({ 1: {}, 2: {} });
      gstService.assignGuest({} as any);
      expect(gstsService.updateGuests).toHaveBeenCalled();
    },
  ));

  it('should called function for updating guests value', inject(
    [GuestService, GuestsService],
    (gstService: GuestService, gstsService: GuestsService) => {
      gstsService.updateGuests = jasmine.createSpy();
      gstService.removeGuest(1);
      expect(gstsService.updateGuests).toHaveBeenCalled();
    },
  ));
});
