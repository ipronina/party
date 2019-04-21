import { Injectable } from '@angular/core';

@Injectable()
export class GuestsService {
  public guests;
  constructor() {
    this.guests = JSON.parse(sessionStorage.getItem('guests')) || {};
  }

  public updateGuests() {
    sessionStorage.setItem('guests', JSON.stringify(this.guests));
  }
}
