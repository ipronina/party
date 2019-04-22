import { Injectable } from '@angular/core';
/* Models */
import { IGuest } from 'src/app/models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GuestsService {
  public guests$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.guests$.next(JSON.parse(sessionStorage.getItem('guests')) || {});
  }

  public get guestsValue(): any {
    return this.guests$.getValue();
  }

  public updateGuests(): void {
    sessionStorage.setItem('guests', JSON.stringify(this.guestsValue));
    this.guests$.next(this.guestsValue);
  }

  public get transformedListOfGuests(): IGuest[] {
    const modifierArray = [];
    if (this.guestsValue) {
      Object.keys(this.guestsValue).forEach(id => {
        modifierArray.push({
          id: +id,
          name: this.guestsValue[id].name,
          surname: this.guestsValue[id].surname,
          gender: this.guestsValue[id].gender,
          age: this.guestsValue[id].age,
          drink: this.guestsValue[id].drink,
        });
      });
    }
    return modifierArray;
  }
}
