import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  constructor(private service: TransferenciaService) {}

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
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  /**
   * Reinicia os valores dos campos do formulário.
   */
  private limpar(): void {
    this.valor = 0;
    this.destino = '0';
  }
}
