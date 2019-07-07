import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIfComponent } from './page-if.component';

describe('PageIfComponent', () => {
  let component: PageIfComponent;
  let fixture: ComponentFixture<PageIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
