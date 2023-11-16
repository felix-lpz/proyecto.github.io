import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenRegModeloComponent } from './ven-reg-modelo.component';

describe('VenRegModeloComponent', () => {
  let component: VenRegModeloComponent;
  let fixture: ComponentFixture<VenRegModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenRegModeloComponent]
    });
    fixture = TestBed.createComponent(VenRegModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
