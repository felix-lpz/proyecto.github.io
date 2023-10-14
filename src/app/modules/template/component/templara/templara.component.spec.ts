import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaraComponent } from './templara.component';

describe('TemplaraComponent', () => {
  let component: TemplaraComponent;
  let fixture: ComponentFixture<TemplaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplaraComponent]
    });
    fixture = TestBed.createComponent(TemplaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
