import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChild1Component } from './page-child1.component';

describe('PageChild1Component', () => {
  let component: PageChild1Component;
  let fixture: ComponentFixture<PageChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
