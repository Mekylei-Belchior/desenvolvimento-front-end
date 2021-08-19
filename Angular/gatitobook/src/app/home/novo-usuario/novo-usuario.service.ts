import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  url = 'http://localhost:3000/user/signup';

  constructor(private httpClient: HttpClient) {}

  /**
   * Cadastra um novo usuário via POST.
   * @param usuario objeto com as propriedades de um (NovoUsuario).
   * @returns Observable
   */
  public cadastra(usuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(this.url, usuario);
  }
}
