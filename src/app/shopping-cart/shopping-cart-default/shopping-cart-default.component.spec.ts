import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDefaultComponent } from './shopping-cart-default.component';

describe('ShoppingCartDefaultComponent', () => {
  let component: ShoppingCartDefaultComponent;
  let fixture: ComponentFixture<ShoppingCartDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
