import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChild3Component } from './page-child3.component';

describe('PageChild3Component', () => {
  let component: PageChild3Component;
  let fixture: ComponentFixture<PageChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
