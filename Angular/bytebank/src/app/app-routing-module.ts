import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';

/* Array de rotas utilizado como parâmetro do (forRoot) no (imports). */
export const routes: Routes = [
  {
    path: 'extrato',
    component: ExtratoComponent,
  } /* Rota para a tela de extrato. */,
  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent,
  } /* Rota para a tela de novas transferências. */,
  {
    path: '',
    redirectTo: 'extrato',
    pathMatch: 'full',
  } /* Redireciona para a tela de extrato. */,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
