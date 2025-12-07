import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingTestList } from './hearing-test-list';

describe('HearingTestList', () => {
  let component: HearingTestList;
  let fixture: ComponentFixture<HearingTestList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearingTestList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearingTestList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
