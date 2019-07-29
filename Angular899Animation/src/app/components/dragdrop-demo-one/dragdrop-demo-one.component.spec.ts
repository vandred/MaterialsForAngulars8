import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropDemoOneComponent } from './dragdrop-demo-one.component';

describe('DragdropDemoOneComponent', () => {
  let component: DragdropDemoOneComponent;
  let fixture: ComponentFixture<DragdropDemoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropDemoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
