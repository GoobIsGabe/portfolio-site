import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerComponent } from './photographer.component';

describe('PhotographerComponent', () => {
  let component: PhotographerComponent;
  let fixture: ComponentFixture<PhotographerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotographerComponent]
    });
    fixture = TestBed.createComponent(PhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
