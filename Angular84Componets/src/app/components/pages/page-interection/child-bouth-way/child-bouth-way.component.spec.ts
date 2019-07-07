import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBouthWayComponent } from './child-bouth-way.component';

describe('ChildBouthWayComponent', () => {
  let component: ChildBouthWayComponent;
  let fixture: ComponentFixture<ChildBouthWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBouthWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBouthWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
