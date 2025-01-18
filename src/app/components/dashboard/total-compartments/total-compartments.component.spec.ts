import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompartmentsComponent } from './total-compartments.component';

describe('TotalCompartmentsComponent', () => {
  let component: TotalCompartmentsComponent;
  let fixture: ComponentFixture<TotalCompartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCompartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCompartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
