import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCompComponent } from './welcome-comp.component';

describe('WelcomeCompComponent', () => {
  let component: WelcomeCompComponent;
  let fixture: ComponentFixture<WelcomeCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeCompComponent]
    });
    fixture = TestBed.createComponent(WelcomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
