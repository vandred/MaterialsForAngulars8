import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLifeCycleComponent } from './page-life-cycle.component';

describe('PageLifeCycleComponent', () => {
  let component: PageLifeCycleComponent;
  let fixture: ComponentFixture<PageLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
