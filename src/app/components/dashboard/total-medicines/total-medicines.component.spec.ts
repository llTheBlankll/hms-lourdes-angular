import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMedicinesComponent } from './total-medicines.component';

describe('TotalMedicinesComponent', () => {
  let component: TotalMedicinesComponent;
  let fixture: ComponentFixture<TotalMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalMedicinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
