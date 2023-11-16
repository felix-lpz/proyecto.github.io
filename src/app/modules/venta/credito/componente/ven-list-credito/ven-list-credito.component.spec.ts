import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListCreditoComponent } from './ven-list-credito.component';

describe('VenListCreditoComponent', () => {
  let component: VenListCreditoComponent;
  let fixture: ComponentFixture<VenListCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListCreditoComponent]
    });
    fixture = TestBed.createComponent(VenListCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
