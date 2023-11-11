import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRegEmpComponent } from './prod-reg-emp.component';

describe('ProdRegEmpComponent', () => {
  let component: ProdRegEmpComponent;
  let fixture: ComponentFixture<ProdRegEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdRegEmpComponent]
    });
    fixture = TestBed.createComponent(ProdRegEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
