import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  /* Construtor da classe. */
  constructor(private service: TransferenciaService) {}

  /**
   * Propaga as propriedades obtidas no evendo contido no formulário de novas transferências.
   *
   * @param $event objeto com as propriedades de uma (Transferencia).
   */
  public transferir($event: Transferencia): void {
    this.service.adicionar($event);
  }
}
