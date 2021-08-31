import { Injectable } from '@angular/core';
import { v1 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class UnicoIdService {
  public geraUnicoIdComPrefixo(prefixo: string): string {
    const id = this.geraUnicoId();

    return `${prefixo}-${id}`;
  }

  private geraUnicoId(): string {
    return uuid();
  }
}
