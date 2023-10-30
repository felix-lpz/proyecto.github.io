import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListClienteComponent } from './ven-list-cliente.component';

describe('VenListClienteComponent', () => {
  let component: VenListClienteComponent;
  let fixture: ComponentFixture<VenListClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListClienteComponent]
    });
    fixture = TestBed.createComponent(VenListClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
