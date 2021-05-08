import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratetvComponent } from './topratetv.component';

describe('TopratetvComponent', () => {
  let component: TopratetvComponent;
  let fixture: ComponentFixture<TopratetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratetvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
