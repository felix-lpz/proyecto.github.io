import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListTrasporteComponent } from './ven-list-trasporte.component';

describe('VenListTrasporteComponent', () => {
  let component: VenListTrasporteComponent;
  let fixture: ComponentFixture<VenListTrasporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListTrasporteComponent]
    });
    fixture = TestBed.createComponent(VenListTrasporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
