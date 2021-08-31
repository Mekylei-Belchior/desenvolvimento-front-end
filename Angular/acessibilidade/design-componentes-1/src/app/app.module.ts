import { ControleDesabilitadoModules } from './shared/diretivas/controle-desabilitado/controle-desabilitado.module';
import { SimNaoBotaoGrupoModule } from './shared/componentes/sim-nao-botao-grupo/sim-nao-botao-grupo.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SimNaoBotaoGrupoModule,
    ReactiveFormsModule,
    FormsModule,
    ControleDesabilitadoModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
