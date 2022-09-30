import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiDetallesComponent } from './epi-detalles.component';

describe('EpiDetallesComponent', () => {
  let component: EpiDetallesComponent;
  let fixture: ComponentFixture<EpiDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpiDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
