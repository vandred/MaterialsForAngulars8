import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostValuesComponent } from './post-values.component';

describe('PostValuesComponent', () => {
  let component: PostValuesComponent;
  let fixture: ComponentFixture<PostValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
