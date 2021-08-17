import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router) {}

  /**
   * Realiza uma nova transferência.
   */
  public transferir(): void {
    /* Objeto com as propriedades obtidas através do formulário. */
    const propriedades: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(propriedades).subscribe(
      (operacao) => {
        console.table(operacao);
        this.router.navigateByUrl('extrato');
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
}
