import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banqueteria } from './banqueteria';

describe('Banqueteria', () => {
  let component: Banqueteria;
  let fixture: ComponentFixture<Banqueteria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banqueteria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banqueteria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
