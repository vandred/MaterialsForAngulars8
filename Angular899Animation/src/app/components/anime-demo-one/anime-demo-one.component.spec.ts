import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDemoOneComponent } from './anime-demo-one.component';

describe('AnimeDemoOneComponent', () => {
  let component: AnimeDemoOneComponent;
  let fixture: ComponentFixture<AnimeDemoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeDemoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
