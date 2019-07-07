import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecondMainComponent } from './page-second-main.component';

describe('PageSecondMainComponent', () => {
  let component: PageSecondMainComponent;
  let fixture: ComponentFixture<PageSecondMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSecondMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSecondMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
