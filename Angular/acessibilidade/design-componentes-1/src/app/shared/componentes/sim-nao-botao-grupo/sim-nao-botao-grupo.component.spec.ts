import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimNaoBotaoGrupoComponent } from './sim-nao-botao-grupo.component';

describe('SimNaoBotaoGrupoComponent', () => {
  let component: SimNaoBotaoGrupoComponent;
  let fixture: ComponentFixture<SimNaoBotaoGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimNaoBotaoGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimNaoBotaoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
