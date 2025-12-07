import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingTestForm } from './hearing-test-form';

describe('HearingTestForm', () => {
  let component: HearingTestForm;
  let fixture: ComponentFixture<HearingTestForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearingTestForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearingTestForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
