import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNgContentComponent } from './page-ng-content.component';

describe('PageNgContentComponent', () => {
  let component: PageNgContentComponent;
  let fixture: ComponentFixture<PageNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
