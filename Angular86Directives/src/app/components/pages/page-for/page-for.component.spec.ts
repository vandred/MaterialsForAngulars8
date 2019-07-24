import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForComponent } from './page-for.component';

describe('PageForComponent', () => {
  let component: PageForComponent;
  let fixture: ComponentFixture<PageForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
