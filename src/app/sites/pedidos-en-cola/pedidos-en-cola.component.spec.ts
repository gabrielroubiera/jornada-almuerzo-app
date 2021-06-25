import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEnColaComponent } from './pedidos-en-cola.component';

describe('PedidosEnColaComponent', () => {
  let component: PedidosEnColaComponent;
  let fixture: ComponentFixture<PedidosEnColaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosEnColaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEnColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
