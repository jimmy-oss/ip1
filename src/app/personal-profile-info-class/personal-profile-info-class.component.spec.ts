import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProfileInfoClassComponent } from './personal-profile-info-class.component';

describe('PersonalProfileInfoClassComponent', () => {
  let component: PersonalProfileInfoClassComponent;
  let fixture: ComponentFixture<PersonalProfileInfoClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProfileInfoClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProfileInfoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
