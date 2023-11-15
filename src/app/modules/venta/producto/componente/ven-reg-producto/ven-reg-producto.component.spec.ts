import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegProductoComponent } from './ven-reg-producto.component';

describe('VenRegProductoComponent', () => {
  let component: VenRegProductoComponent;
  let fixture: ComponentFixture<VenRegProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegProductoComponent]
    });
    fixture = TestBed.createComponent(VenRegProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
