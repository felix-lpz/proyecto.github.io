import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantListMaterialComponent } from './mant-list-material.component';

describe('MantListMaterialComponent', () => {
  let component: MantListMaterialComponent;
  let fixture: ComponentFixture<MantListMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantListMaterialComponent]
    });
    fixture = TestBed.createComponent(MantListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
