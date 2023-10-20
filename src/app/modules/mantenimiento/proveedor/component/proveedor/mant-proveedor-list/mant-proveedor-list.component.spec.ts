import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProveedorListComponent } from './mant-proveedor-list.component';

describe('MantProveedorListComponent', () => {
  let component: MantProveedorListComponent;
  let fixture: ComponentFixture<MantProveedorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantProveedorListComponent]
    });
    fixture = TestBed.createComponent(MantProveedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
