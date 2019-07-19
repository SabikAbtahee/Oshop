import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDefaultComponent } from './purchase-default.component';

describe('PurchaseDefaultComponent', () => {
  let component: PurchaseDefaultComponent;
  let fixture: ComponentFixture<PurchaseDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
