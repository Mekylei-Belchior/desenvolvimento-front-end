import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url = 'http://localhost:3000/user/login';

  constructor(private httpClient: HttpClient) {}

  /**
   * Realiza a autenticação.
   * @param usuario Nome de usuário.
   * @param senha Chave de acesso.
   * @returns Um (Observable)
   */
  public autentica(usuario: string, senha: string): Observable<any> {
    const credenciais = { userName: usuario, password: senha };

    return this.httpClient.post(this.url, credenciais);
  }
}
