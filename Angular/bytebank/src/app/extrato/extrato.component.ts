import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];

  constructor(private service: TransferenciaService) {}

  public ngOnInit(): void {
    /* Obtém as transferências na inicialização. */
    this.service
      .transferenciasApi()
      .subscribe((transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
        console.table(transferencias);
      });
  }
}