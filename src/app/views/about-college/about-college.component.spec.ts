import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCollegeComponent } from './about-college.component';

describe('AboutCollegeComponent', () => {
  let component: AboutCollegeComponent;
  let fixture: ComponentFixture<AboutCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
