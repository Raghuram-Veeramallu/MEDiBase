import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlduserComponent } from './olduser.component';

describe('OlduserComponent', () => {
  let component: OlduserComponent;
  let fixture: ComponentFixture<OlduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
