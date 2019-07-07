import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentChildComponent } from './page-content-child.component';

describe('PageContentChildComponent', () => {
  let component: PageContentChildComponent;
  let fixture: ComponentFixture<PageContentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
