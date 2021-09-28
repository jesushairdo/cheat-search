import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatDetailComponent } from './cheat-detail.component';

describe('CheatDetailComponent', () => {
  let component: CheatDetailComponent;
  let fixture: ComponentFixture<CheatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
