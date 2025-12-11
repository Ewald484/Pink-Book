import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babylist } from './babylist';

describe('Babylist', () => {
  let component: Babylist;
  let fixture: ComponentFixture<Babylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Babylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Babylist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
