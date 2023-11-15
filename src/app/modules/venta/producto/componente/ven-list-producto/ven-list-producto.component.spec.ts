import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListProductoComponent } from './ven-list-producto.component';

describe('VenListProductoComponent', () => {
  let component: VenListProductoComponent;
  let fixture: ComponentFixture<VenListProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListProductoComponent]
    });
    fixture = TestBed.createComponent(VenListProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
