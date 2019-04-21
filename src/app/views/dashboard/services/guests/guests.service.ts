import { Injectable } from '@angular/core';
/* Models */
import { IGuest } from 'src/app/models';

@Injectable()
export class GuestsService {
  public guests;
  constructor() {
    this.guests = JSON.parse(sessionStorage.getItem('guests')) || {};
  }

  public updateGuests() {
    sessionStorage.setItem('guests', JSON.stringify(this.guests));
  }

  public get transformedListOfGuests(): IGuest[] {
    const modifierArray = [];
    if (this.guests) {
      Object.keys(this.guests).forEach(id => {
        modifierArray.push({
          id,
          name: this.guests[id].name,
          surname: this.guests[id].surname,
          gender: this.guests[id].gender,
          age: this.guests[id].age,
          drink: this.guests[id].drink,
        });
      });
    }
    return modifierArray;
  }
}
