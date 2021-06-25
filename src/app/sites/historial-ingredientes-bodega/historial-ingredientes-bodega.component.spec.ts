import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialIngredientesBodegaComponent } from './historial-ingredientes-bodega.component';

describe('HistorialIngredientesBodegaComponent', () => {
  let component: HistorialIngredientesBodegaComponent;
  let fixture: ComponentFixture<HistorialIngredientesBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialIngredientesBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialIngredientesBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
