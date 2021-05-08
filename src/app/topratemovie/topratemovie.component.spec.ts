import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratemovieComponent } from './topratemovie.component';

describe('TopratemovieComponent', () => {
  let component: TopratemovieComponent;
  let fixture: ComponentFixture<TopratemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
