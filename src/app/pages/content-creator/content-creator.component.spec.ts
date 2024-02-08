import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorComponent } from './content-creator.component';

describe('ContentCreatorComponent', () => {
  let component: ContentCreatorComponent;
  let fixture: ComponentFixture<ContentCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCreatorComponent]
    });
    fixture = TestBed.createComponent(ContentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
