import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationPageComponent } from './form-validation-page.component';

describe('FormValidationPageComponent', () => {
  let component: FormValidationPageComponent;
  let fixture: ComponentFixture<FormValidationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
