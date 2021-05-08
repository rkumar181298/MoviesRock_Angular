import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularmovieComponent } from './popularmovie.component';

describe('PopularmovieComponent', () => {
  let component: PopularmovieComponent;
  let fixture: ComponentFixture<PopularmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
