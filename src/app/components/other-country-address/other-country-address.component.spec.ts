import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCountryAddressComponent } from './other-country-address.component';

describe('OtherCountryAddressComponent', () => {
  let component: OtherCountryAddressComponent;
  let fixture: ComponentFixture<OtherCountryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCountryAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCountryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
