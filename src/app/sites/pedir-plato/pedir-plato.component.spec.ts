import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirPlatoComponent } from './pedir-plato.component';

describe('PedirPlatoComponent', () => {
  let component: PedirPlatoComponent;
  let fixture: ComponentFixture<PedirPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
