import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListProductionComponent } from './prod-list-production.component';

describe('ProdListProductionComponent', () => {
  let component: ProdListProductionComponent;
  let fixture: ComponentFixture<ProdListProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdListProductionComponent]
    });
    fixture = TestBed.createComponent(ProdListProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
