import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRegProductionComponent } from './prod-reg-production.component';

describe('ProdRegProductionComponent', () => {
  let component: ProdRegProductionComponent;
  let fixture: ComponentFixture<ProdRegProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdRegProductionComponent]
    });
    fixture = TestBed.createComponent(ProdRegProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
