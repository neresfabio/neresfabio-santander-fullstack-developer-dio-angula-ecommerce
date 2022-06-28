import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEcommerceComponent } from './my-ecommerce.component';

describe('MyEcommerceComponent', () => {
  let component: MyEcommerceComponent;
  let fixture: ComponentFixture<MyEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
