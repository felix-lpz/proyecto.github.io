import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListAreaComponent } from './prod-list-area.component';

describe('ProdListAreaComponent', () => {
  let component: ProdListAreaComponent;
  let fixture: ComponentFixture<ProdListAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdListAreaComponent]
    });
    fixture = TestBed.createComponent(ProdListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
