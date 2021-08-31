import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { GerenciadorTecladoDirective } from './gerenciador-teclado.directive';
import { ItemGerenciadoTecladoDirective } from './item-gerenciado-teclado.directive';

@NgModule({
  declarations: [GerenciadorTecladoDirective, ItemGerenciadoTecladoDirective],
  imports: [CommonModule],
  exports: [GerenciadorTecladoDirective, ItemGerenciadoTecladoDirective],
})
export class GerenciadorTecladoModule {}
