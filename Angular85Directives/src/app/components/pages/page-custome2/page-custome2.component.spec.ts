import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCustome2Component } from './page-custome2.component';

describe('PageCustome2Component', () => {
  let component: PageCustome2Component;
  let fixture: ComponentFixture<PageCustome2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCustome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCustome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
