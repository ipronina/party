import { Component, OnInit, ViewChild } from '@angular/core';
import { GUESTS } from '../../mocks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { GuestService } from './services/guest';
import { IGuest } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('modal') public modal;
  public guests = GUESTS;
  public myForm: FormGroup;
  private editableGuestId: number;

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

  public openModal(modal): void {
    this.modalService.open(modal, { centered: true });
  }

  public assignGuest(guestObj: IGuest): void {
    if (guestObj) {
      this.setFormValue(guestObj);
    }
    this.editableGuestId = guestObj.id;
    this.openModal(this.modal);
  }

  private setFormValue(object: IGuest): void {
    Object.keys(this.myForm.controls).forEach(control => {
      this.myForm.controls[control].setValue(object[control]);
    });
  }

  public formSubmit(form: FormGroup): void {
    if (form.valid) {
      const guestObj: any = {};
      Object.keys(this.myForm.controls).forEach(control => {
        guestObj[control] = this.myForm.controls[control].value;
      });
      guestObj.id = this.editableGuestId ? this.editableGuestId : guestObj.id;
      this.guestService.assignGuest(guestObj as any);
      form.reset();
      this.editableGuestId = 0;
    }
  }
}
