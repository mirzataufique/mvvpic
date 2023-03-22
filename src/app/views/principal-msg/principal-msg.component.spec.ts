import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMsgComponent } from './principal-msg.component';

describe('PrincipalMsgComponent', () => {
  let component: PrincipalMsgComponent;
  let fixture: ComponentFixture<PrincipalMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
