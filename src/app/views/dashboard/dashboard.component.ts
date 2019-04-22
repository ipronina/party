import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { GuestService } from './services/guest';
import { IGuest } from 'src/app/models';
import { GuestsService } from './services/guests';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('guestModal') public guestModal;
  @ViewChild('deleteModal') public deleteModal;
  public guests;
  public guestForm: FormGroup;
  private currentGuestId: number;

  constructor(
    private modalService: NgbModal,
    private guestService: GuestService,
    private guestsService: GuestsService,
  ) {}

  ngOnInit() {
    this.guestsService.guests$.subscribe(() => {
      this.guests = this.guestsService.transformedListOfGuests;
    });

    this.guestForm = new FormGroup({
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

  public assignGuest(guestObj: IGuest): void {
    if (guestObj) {
      this.setFormValue(guestObj);
      this.currentGuestId = guestObj.id;
    }
    this.modalService.open(this.guestModal, { centered: true });
  }

  public openDeleteModal(id: number): void {
    this.currentGuestId = id;
    this.modalService.open(this.deleteModal, { centered: true });
  }

  public deleteGuest(): void {
    if (this.currentGuestId) {
      this.guestService.removeGuest(this.currentGuestId);
      this.currentGuestId = 0;
    }
  }

  public formSubmit(form: FormGroup): void {
    if (form.valid) {
      const guestObj: any = {};
      Object.keys(form.controls).forEach(control => {
        guestObj[control] = form.controls[control].value;
      });
      guestObj.id = this.currentGuestId ? this.currentGuestId : guestObj.id;
      this.guestService.assignGuest(guestObj as any);
      form.reset();
      this.currentGuestId = 0;
    }
  }

  private setFormValue(object: IGuest): void {
    Object.keys(this.guestForm.controls).forEach(control => {
      this.guestForm.controls[control].setValue(object[control]);
    });
  }
}
