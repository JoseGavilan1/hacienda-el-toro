import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambientacion } from './ambientacion';

describe('Ambientacion', () => {
  let component: Ambientacion;
  let fixture: ComponentFixture<Ambientacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ambientacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ambientacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
