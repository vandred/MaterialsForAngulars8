import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStylesComponent } from './page-styles.component';

describe('PageStylesComponent', () => {
  let component: PageStylesComponent;
  let fixture: ComponentFixture<PageStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
