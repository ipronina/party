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

  public assignGuest(guest: IGuest): void {
    const guestObj = {};
    let id;
    // if guest exist
    if (guest.id && this.guestsService.guests[guest.id]) {
      id = guest.id;
    } else {
      id = +findLastKey(this.guestsService.guests) + 1 || 1; // last id from SS + 1
    }
    guestObj[id] = guest;
    assign(this.guestsService.guests, guestObj);
    this.guestsService.updateGuests();
  }

  public getGuest(id: number): void {
    assign(get(this.guestsService.guests, 'guests.id'), { id });
  }

  public removeGuest(id: number): void {
    delete this.guestsService.guests[id];
    this.guestsService.updateGuests();
  }
}
