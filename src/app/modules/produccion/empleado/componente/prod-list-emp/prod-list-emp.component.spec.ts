import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListEmpComponent } from './prod-list-emp.component';

describe('ProdListEmpComponent', () => {
  let component: ProdListEmpComponent;
  let fixture: ComponentFixture<ProdListEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdListEmpComponent]
    });
    fixture = TestBed.createComponent(ProdListEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
