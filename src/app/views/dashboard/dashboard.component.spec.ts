import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestService } from './services/guest';
import { GuestsService } from './services/guests';
import { IGuest } from 'src/app/models';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const guestObjWithId = {
    id: 1,
    name: '',
    surname: '',
    gender: '',
    age: 1,
    drink: '',
  };
  const guestObjWithoutId = {
    id: undefined,
    name: '',
    surname: '',
    gender: '',
    age: 1,
    drink: '',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgbModule],
      declarations: [DashboardComponent],
      providers: [GuestService, GuestsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('guestForm should be defined ', () => {
    expect(component.guestForm).toBeDefined();
    expect(component.guestForm.controls.name).toBeDefined();
    expect(component.guestForm.controls.surname).toBeDefined();
    expect(component.guestForm.controls.gender).toBeDefined();
    expect(component.guestForm.controls.age).toBeDefined();
    expect(component.guestForm.controls.drink).toBeDefined();
  });

  it('should return object values ', () => {
    const obj = { a: 1, b: 2 };
    const q = component.getValues(obj);
    component.getValues(q);
    expect(q).toEqual([1, 2]);
  });

  xit('should open adding/editing modal ', inject([NgbModal], (service: NgbModal) => {
    component.assignGuest({} as IGuest);
    service.open = jasmine.createSpy();
    component.guestModal = jasmine.createSpy();
    expect(service.open).toHaveBeenCalledWith(component.guestModal, { centered: true });
  }));

  it('should call setFormValue() and set currentGuestId to 1', inject([NgbModal], (service: NgbModal) => {
    service.open = jasmine.createSpy();
    (component as any).setFormValue = jasmine.createSpy();
    component.assignGuest(guestObjWithId);
    expect((component as any).setFormValue).toHaveBeenCalledWith(guestObjWithId);
    expect((component as any).currentGuestId).toBe(1);
  }));

  it('should not call setFormValue()', inject([NgbModal], (service: NgbModal) => {
    service.open = jasmine.createSpy();
    (component as any).setFormValue = jasmine.createSpy();
    component.assignGuest({} as IGuest);
    expect((component as any).setFormValue).not.toHaveBeenCalledWith(guestObjWithId);
  }));

  it('should open removing modal and set currentGuestId to 1', inject([NgbModal], (service: NgbModal) => {
    service.open = jasmine.createSpy();
    component.openDeleteModal(1);
    expect((component as any).currentGuestId).toBe(1);
    expect(service.open).toHaveBeenCalledWith(component.deleteModal, { centered: true });
  }));

  xit('should not open deleting modal', inject([NgbModal], (service: NgbModal) => {
    service.open = jasmine.createSpy();
    component.openDeleteModal(null);
    expect(service.open).not.toHaveBeenCalled();
  }));

  it('should add guest and set currentGuestId to 0', inject([GuestService], (service: GuestService) => {
    const form = {
      valid: true,
      controls: {
        name: { value: '' },
        surname: { value: '' },
        gender: { value: '' },
        age: { value: 1 },
        drink: { value: '' },
      },
      reset: () => {},
    };
    service.assignGuest = jasmine.createSpy();
    component.formSubmit(form as any);
    expect(service.assignGuest).toHaveBeenCalledWith(guestObjWithoutId);
    expect((component as any).currentGuestId).toBe(0);
  }));

  it('should set form value', () => {
    (component as any).setFormValue(guestObjWithId);
    expect(component.guestForm.value).toEqual({ name: '', surname: '', gender: '', age: 1, drink: '' });
  });
});
