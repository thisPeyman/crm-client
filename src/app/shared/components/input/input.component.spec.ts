import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputComponent],
    });

    component = TestBed.inject(InputComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
