import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestService } from './services/guest';
import { GuestsService } from './services/guests';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
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

  it('myForm should be defined ', () => {
    expect(component.myForm).toBeDefined();
    expect(component.myForm.controls.name).toBeDefined();
    expect(component.myForm.controls.surname).toBeDefined();
    expect(component.myForm.controls.gender).toBeDefined();
    expect(component.myForm.controls.age).toBeDefined();
    expect(component.myForm.controls.drink).toBeDefined();
  });

  it('should return object values ', () => {
    const obj = { a: 1, b: 2 };
    const q = component.getValues(obj);
    component.getValues(q);
    expect(q).toEqual([1, 2]);
  });

  it('should add guest ', inject([GuestService], (service: GuestService) => {
    const form = {
      valid: true,
      controls: {
        name: { value: 1 },
        surname: { value: 2 },
        gender: { value: 3 },
        age: { value: 4 },
        drink: { value: 5 },
      },
      reset: () => {},
    };

    const obj = {
      name: 1,
      surname: 2,
      gender: 3,
      age: 4,
      drink: 5,
    };
    service.addGuest = jasmine.createSpy();
    component.addGuest(form as any);
    expect(service.addGuest).toHaveBeenCalledWith(obj);
  }));
});
