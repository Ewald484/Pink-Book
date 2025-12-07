import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpDashboard } from './follow-up-dashboard';

describe('FollowUpDashboard', () => {
  let component: FollowUpDashboard;
  let fixture: ComponentFixture<FollowUpDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
