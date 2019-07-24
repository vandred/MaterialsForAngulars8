import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutValuesComponent } from './put-values.component';

describe('PutValuesComponent', () => {
  let component: PutValuesComponent;
  let fixture: ComponentFixture<PutValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
