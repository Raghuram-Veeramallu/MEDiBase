import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityLoginComponent } from './facility-login.component';

describe('FacilityLoginComponent', () => {
  let component: FacilityLoginComponent;
  let fixture: ComponentFixture<FacilityLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
