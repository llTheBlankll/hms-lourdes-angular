import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearExpirationItemComponent } from './near-expiration-item.component';

describe('NearExpirationItemComponent', () => {
  let component: NearExpirationItemComponent;
  let fixture: ComponentFixture<NearExpirationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearExpirationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearExpirationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
