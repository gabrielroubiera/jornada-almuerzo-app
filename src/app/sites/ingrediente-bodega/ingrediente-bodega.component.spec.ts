import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteBodegaComponent } from './ingrediente-bodega.component';

describe('IngredienteBodegaComponent', () => {
  let component: IngredienteBodegaComponent;
  let fixture: ComponentFixture<IngredienteBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
