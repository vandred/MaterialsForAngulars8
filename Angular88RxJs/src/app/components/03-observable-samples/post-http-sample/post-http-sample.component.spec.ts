import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHttpSampleComponent } from './post-http-sample.component';

describe('PostHttpSampleComponent', () => {
  let component: PostHttpSampleComponent;
  let fixture: ComponentFixture<PostHttpSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHttpSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHttpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
