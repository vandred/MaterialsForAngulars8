import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureEnterComponent } from './secure-enter.component';

describe('SecureEnterComponent', () => {
  let component: SecureEnterComponent;
  let fixture: ComponentFixture<SecureEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
