import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStorageComponent } from './total-storage.component';

describe('TotalCabinetsComponent', () => {
  let component: TotalStorageComponent;
  let fixture: ComponentFixture<TotalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
