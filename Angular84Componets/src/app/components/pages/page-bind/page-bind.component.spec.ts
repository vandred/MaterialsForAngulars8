import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBindComponent } from './page-bind.component';

describe('PageBindComponent', () => {
  let component: PageBindComponent;
  let fixture: ComponentFixture<PageBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
