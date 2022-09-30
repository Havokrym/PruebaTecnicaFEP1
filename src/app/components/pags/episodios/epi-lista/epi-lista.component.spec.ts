import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiListaComponent } from './epi-lista.component';

describe('EpiListaComponent', () => {
  let component: EpiListaComponent;
  let fixture: ComponentFixture<EpiListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpiListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
