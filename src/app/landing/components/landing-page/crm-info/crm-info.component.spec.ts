import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmInfoComponent } from './crm-info.component';

describe('CrmInfoComponent', () => {
  let component: CrmInfoComponent;
  let fixture: ComponentFixture<CrmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
