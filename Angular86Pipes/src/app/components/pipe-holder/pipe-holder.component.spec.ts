import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeHolderComponent } from './pipe-holder.component';

describe('PipeHolderComponent', () => {
  let component: PipeHolderComponent;
  let fixture: ComponentFixture<PipeHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
