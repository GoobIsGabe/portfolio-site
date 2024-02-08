import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentsComponent } from './accents.component';

describe('AccentsComponent', () => {
  let component: AccentsComponent;
  let fixture: ComponentFixture<AccentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccentsComponent]
    });
    fixture = TestBed.createComponent(AccentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
