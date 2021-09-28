import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSearchComponent } from './cheat-search.component';

describe('CheatSearchComponent', () => {
  let component: CheatSearchComponent;
  let fixture: ComponentFixture<CheatSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
