import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Array de rotas. */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  } /* Rediceciona para a rota (home), se nenhuma rota for informada. */,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  } /* Rota para (home). */,
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((m) => m.AnimaisModule),
  } /* Rota para (animais). */,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
