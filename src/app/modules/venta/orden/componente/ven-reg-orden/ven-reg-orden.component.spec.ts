import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegOrdenComponent } from './ven-reg-orden.component';

describe('VenRegOrdenComponent', () => {
  let component: VenRegOrdenComponent;
  let fixture: ComponentFixture<VenRegOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegOrdenComponent]
    });
    fixture = TestBed.createComponent(VenRegOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
