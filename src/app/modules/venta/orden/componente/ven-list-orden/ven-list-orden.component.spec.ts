import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListOrdenComponent } from './ven-list-orden.component';

describe('VenListOrdenComponent', () => {
  let component: VenListOrdenComponent;
  let fixture: ComponentFixture<VenListOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListOrdenComponent]
    });
    fixture = TestBed.createComponent(VenListOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
