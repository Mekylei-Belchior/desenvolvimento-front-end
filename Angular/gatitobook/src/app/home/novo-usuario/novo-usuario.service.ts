import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  /* Endpoints da API. */
  urls = {
    signup: 'http://localhost:3000/user/signup',
    exists: 'http://localhost:3000/user/exists',
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * Cadastra um novo usuário via POST.
   * @param usuario objeto com as propriedades de um (NovoUsuario).
   * @returns Observable
   */
  public cadastra(usuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(this.urls.signup, usuario);
  }

  /**
   * Verifica se um usuário já existe na base de dados.
   * @param nomeUsuario Nome do usuário.
   * @returns Um Observable.
   */
  public verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.httpClient.get(this.urls.exists.concat(`/${nomeUsuario}`));
  }
}
