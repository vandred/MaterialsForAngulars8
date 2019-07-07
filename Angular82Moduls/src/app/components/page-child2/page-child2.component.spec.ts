import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChild2Component } from './page-child2.component';

describe('PageChild2Component', () => {
  let component: PageChild2Component;
  let fixture: ComponentFixture<PageChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
