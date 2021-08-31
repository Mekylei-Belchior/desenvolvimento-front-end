import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimNaoBotaoGrupoComponent } from './sim-nao-botao-grupo.component';
import { GerenciadorTecladoModule } from '../../diretivas/gerenciador-teclado/gerenciador-teclado.module';

@NgModule({
  declarations: [SimNaoBotaoGrupoComponent],
  imports: [CommonModule, GerenciadorTecladoModule],
  exports: [SimNaoBotaoGrupoComponent],
})
export class SimNaoBotaoGrupoModule {}
