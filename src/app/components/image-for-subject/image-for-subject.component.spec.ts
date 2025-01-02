import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageForSubjectComponent } from './image-for-subject.component';

describe('ImageForSubjectComponent', () => {
  let component: ImageForSubjectComponent;
  let fixture: ComponentFixture<ImageForSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageForSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageForSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
