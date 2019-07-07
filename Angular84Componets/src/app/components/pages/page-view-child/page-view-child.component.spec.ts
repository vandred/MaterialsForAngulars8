import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewChildComponent } from './page-view-child.component';

describe('PageViewChildComponent', () => {
  let component: PageViewChildComponent;
  let fixture: ComponentFixture<PageViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
