import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegistroClienteComponent } from './ven-registro-cliente.component';

describe('VenRegistroClienteComponent', () => {
  let component: VenRegistroClienteComponent;
  let fixture: ComponentFixture<VenRegistroClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegistroClienteComponent]
    });
    fixture = TestBed.createComponent(VenRegistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
