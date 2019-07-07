import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormPageComponent } from './react-form-page.component';

describe('ReactFormPageComponent', () => {
  let component: ReactFormPageComponent;
  let fixture: ComponentFixture<ReactFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
