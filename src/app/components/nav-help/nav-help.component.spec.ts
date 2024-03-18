import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHelpComponent } from './nav-help.component';

describe('NavHelpComponent', () => {
  let component: NavHelpComponent;
  let fixture: ComponentFixture<NavHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHelpComponent]
    });
    fixture = TestBed.createComponent(NavHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
