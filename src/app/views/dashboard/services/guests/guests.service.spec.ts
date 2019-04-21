import { TestBed, inject } from '@angular/core/testing';

import { GuestsService } from './guests.service';

describe('GuestsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GuestsService],
    }),
  );

  it('should be created', () => {
    const service: GuestsService = TestBed.get(GuestsService);
    expect(service).toBeTruthy();
  });

  it('guests should be defined', inject([GuestsService], (service: GuestsService) => {
    expect(service.guests).toBeDefined();
  }));

  it('should set item for SS', inject([GuestsService], (service: GuestsService) => {
    service.guests = { a: 1, b: 2 };
    sessionStorage.setItem = jasmine.createSpy();
    service.updateGuests();
    expect(sessionStorage.setItem).toHaveBeenCalledWith('guests', '{"a":1,"b":2}');
  }));
});
