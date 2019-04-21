import { Component, OnInit } from '@angular/core';
import { GUESTS } from '../../mocks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { GuestService } from './services/guest';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public guests = GUESTS;
  public myForm: FormGroup;

  constructor(private modalService: NgbModal, private guestService: GuestService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      drink: new FormControl('', [Validators.required]),
    });
  }

  public getValues(object: {}): {} {
    return Object.values(object);
  }

  public openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  public addGuest(form: FormGroup) {
    if (form.valid) {
      const guestObj = {
        name: form.controls.name.value,
        surname: form.controls.surname.value,
        gender: form.controls.gender.value,
        age: form.controls.age.value,
        drink: form.controls.drink.value,
      };
      this.guestService.addGuest(guestObj as any);
      form.reset();
    }
  }
}
