import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegCreditoComponent } from './ven-reg-credito.component';

describe('VenRegCreditoComponent', () => {
  let component: VenRegCreditoComponent;
  let fixture: ComponentFixture<VenRegCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegCreditoComponent]
    });
    fixture = TestBed.createComponent(VenRegCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
