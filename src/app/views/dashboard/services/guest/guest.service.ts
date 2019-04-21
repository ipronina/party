import { Injectable } from '@angular/core';
/* Services */
import { GuestsService } from '../guests';
/* Models */
import { IGuest } from 'src/app/models';
/* Vendor */
import * as get from 'lodash.get';
import * as findLastKey from 'lodash.findLastKey';
import * as assign from 'lodash.assign';

@Injectable()
export class GuestService {
  constructor(public guestsService: GuestsService) {}

  public addGuest(guest: IGuest) {
    const id = +findLastKey(this.guestsService.guests) + 1 || 1; // last id from SS + 1
    const guestObj = {};
    guestObj[id] = guest;
    assign(this.guestsService.guests, guestObj);
    this.guestsService.updateGuests();
    console.log('add');
  }

  public getGuest(id: number) {
    return assign(get(this.guestsService.guests, 'guests.id'), { id });
  }

  public removeGuest(id: number) {
    delete this.guestsService.guests.id;
    this.guestsService.updateGuests();
    console.log('remove');
  }
}
