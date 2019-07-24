import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCustomeComponent } from './page-custome.component';

describe('PageCustomeComponent', () => {
  let component: PageCustomeComponent;
  let fixture: ComponentFixture<PageCustomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCustomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCustomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
