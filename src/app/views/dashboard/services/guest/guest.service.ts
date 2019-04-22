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
    if (guest.id && this.guestsService.guestsValue[guest.id]) {
      id = guest.id;
    } else {
      id = +findLastKey(this.guestsService.guestsValue) + 1 || 1; // last id from SS + 1
    }
    guestObj[id] = guest;
    assign(this.guestsService.guestsValue, guestObj);
    this.guestsService.updateGuests();
  }

  public removeGuest(id: number): void {
    delete this.guestsService.guestsValue[id];
    this.guestsService.updateGuests();
  }
}
