import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDefaultComponent } from './category-default.component';

describe('CategoryDefaultComponent', () => {
  let component: CategoryDefaultComponent;
  let fixture: ComponentFixture<CategoryDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
