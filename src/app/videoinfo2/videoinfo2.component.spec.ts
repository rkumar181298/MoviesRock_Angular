import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videoinfo2Component } from './videoinfo2.component';

describe('Videoinfo2Component', () => {
  let component: Videoinfo2Component;
  let fixture: ComponentFixture<Videoinfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videoinfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Videoinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
