import { TestBed, inject } from '@angular/core/testing';

import { GuestsService } from './guests.service';

describe('GuestsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [GuestsService],
    }),
  );
  let obj: any = { a: 1, b: 2 };
  const guests$ = {
    getValue: () => {
      return obj;
    },
  } as any;

  it('should be created', () => {
    const service: GuestsService = TestBed.get(GuestsService);
    expect(service).toBeTruthy();
  });

  it('guests should be defined', inject([GuestsService], (service: GuestsService) => {
    service.guests$ = guests$;
    expect(service.guestsValue).toEqual({ a: 1, b: 2 });
  }));

  it('should set item for SS and update guests$', inject([GuestsService], (service: GuestsService) => {
    service.guests$ = guests$;
    sessionStorage.setItem = jasmine.createSpy();
    service.guests$.next = jasmine.createSpy();
    service.updateGuests();
    expect(sessionStorage.setItem).toHaveBeenCalledWith('guests', '{"a":1,"b":2}');
    expect(service.guests$.next).toHaveBeenCalledWith({ a: 1, b: 2 });
  }));

  it('should get transform object of guests', inject([GuestsService], (service: GuestsService) => {
    obj = { 1: { name: '', surname: '', gender: '', age: 1, drink: '' } };
    service.guests$ = guests$;
    const result = service.transformedListOfGuests;
    expect(result).toEqual([{ id: 1, name: '', surname: '', gender: '', age: 1, drink: '' }]);
  }));
});
