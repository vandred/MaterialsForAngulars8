import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecondeComponent } from './page-seconde.component';

describe('PageSecondeComponent', () => {
  let component: PageSecondeComponent;
  let fixture: ComponentFixture<PageSecondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSecondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSecondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
