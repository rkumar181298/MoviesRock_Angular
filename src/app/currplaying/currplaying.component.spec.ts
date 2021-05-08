import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrplayingComponent } from './currplaying.component';

describe('CurrplayingComponent', () => {
  let component: CurrplayingComponent;
  let fixture: ComponentFixture<CurrplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrplayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
