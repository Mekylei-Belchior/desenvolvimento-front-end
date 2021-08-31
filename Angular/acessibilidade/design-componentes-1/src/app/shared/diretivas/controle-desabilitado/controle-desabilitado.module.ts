import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControleDesabilitadoDirective } from './controle-desabilitado.directive';

@NgModule({
  declarations: [ControleDesabilitadoDirective],
  imports: [CommonModule],
  exports: [ControleDesabilitadoDirective],
})
export class ControleDesabilitadoModules {}
