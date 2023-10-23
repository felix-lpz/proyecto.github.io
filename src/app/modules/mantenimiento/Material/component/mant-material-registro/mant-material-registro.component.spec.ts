import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantMaterialRegistroComponent } from './mant-material-registro.component';

describe('MantMaterialRegistroComponent', () => {
  let component: MantMaterialRegistroComponent;
  let fixture: ComponentFixture<MantMaterialRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantMaterialRegistroComponent]
    });
    fixture = TestBed.createComponent(MantMaterialRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
