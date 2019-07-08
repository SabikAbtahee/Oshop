import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryDefaultComponent } from './enquiry-default.component';

describe('EnquiryDefaultComponent', () => {
  let component: EnquiryDefaultComponent;
  let fixture: ComponentFixture<EnquiryDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
