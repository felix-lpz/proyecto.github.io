import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenListModeloComponent } from './ven-list-modelo.component';

describe('VenListModeloComponent', () => {
  let component: VenListModeloComponent;
  let fixture: ComponentFixture<VenListModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenListModeloComponent]
    });
    fixture = TestBed.createComponent(VenListModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
