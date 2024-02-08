import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellMoreButtonComponent } from './tell-more-button.component';

describe('TellMoreButtonComponent', () => {
  let component: TellMoreButtonComponent;
  let fixture: ComponentFixture<TellMoreButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TellMoreButtonComponent]
    });
    fixture = TestBed.createComponent(TellMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
