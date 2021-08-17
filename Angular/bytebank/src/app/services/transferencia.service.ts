import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  /**
   * Obtém as transferências.
   */
  public get listaTransferencias(): Array<Transferencia> {
    return this.transferencias;
  }

  /**
   * Obtém as transferências de uma API via GET.
   * @returns um (Observable) de uma lista de (Transferencia).
   */
  public transferenciasApi(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  /**
   * Adiciona uma nova transferência via POST.
   * @param transferencia objeto com as propriedades de uma (Transferencia).
   */
  public adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.inserirData(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  /**
   * Insere uma propriedade com a data atual.
   * @param transferencia objeto com as propriedades de uma (Transferencia).
   */
  private inserirData(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }
}
