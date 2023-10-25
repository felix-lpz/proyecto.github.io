import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRegistroAreaComponent } from './prod-registro-area.component';

describe('ProdRegistroAreaComponent', () => {
  let component: ProdRegistroAreaComponent;
  let fixture: ComponentFixture<ProdRegistroAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdRegistroAreaComponent]
    });
    fixture = TestBed.createComponent(ProdRegistroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
