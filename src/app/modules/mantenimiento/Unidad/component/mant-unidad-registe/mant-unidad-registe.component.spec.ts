import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantUnidadRegisteComponent } from './mant-unidad-registe.component';

describe('MantUnidadRegisteComponent', () => {
  let component: MantUnidadRegisteComponent;
  let fixture: ComponentFixture<MantUnidadRegisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantUnidadRegisteComponent]
    });
    fixture = TestBed.createComponent(MantUnidadRegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
