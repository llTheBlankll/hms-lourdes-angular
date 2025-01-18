import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCabinetsComponent } from './total-cabinets.component';

describe('TotalCabinetsComponent', () => {
  let component: TotalCabinetsComponent;
  let fixture: ComponentFixture<TotalCabinetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCabinetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
