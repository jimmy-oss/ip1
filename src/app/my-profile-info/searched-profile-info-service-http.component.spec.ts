import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedProfileInfoServiceHttpComponent } from './searched-profile-info-service-http.component';

describe('SearchedProfileInfoServiceHttpComponent', () => {
  let component: SearchedProfileInfoServiceHttpComponent;
  let fixture: ComponentFixture<SearchedProfileInfoServiceHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedProfileInfoServiceHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedProfileInfoServiceHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
