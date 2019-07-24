import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureExiteComponent } from './secure-exite.component';

describe('SecureExiteComponent', () => {
  let component: SecureExiteComponent;
  let fixture: ComponentFixture<SecureExiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureExiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureExiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
