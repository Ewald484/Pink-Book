import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babyform } from './babyform';

describe('Babyform', () => {
  let component: Babyform;
  let fixture: ComponentFixture<Babyform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Babyform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Babyform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
