import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegTrasporteComponent } from './ven-reg-trasporte.component';

describe('VenRegTrasporteComponent', () => {
  let component: VenRegTrasporteComponent;
  let fixture: ComponentFixture<VenRegTrasporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegTrasporteComponent]
    });
    fixture = TestBed.createComponent(VenRegTrasporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
