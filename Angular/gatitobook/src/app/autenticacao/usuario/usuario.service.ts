import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    /* Se já existe token, propaga o estado do usuário. */
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  /**
   * Decodifica o token para o objeto (Usuario).
   */
  private decodificaJWT(): void {
    const token = this.tokenService.recupera();
    const usuario = jwt_decode(token) as Usuario;

    /* Propaga o estado do usuário. */
    this.usuarioSubject.next(usuario);
  }

  /**
   * Obtém o estado do usuário.
   * @returns O estado do usuário como um Observable.
   */
  public retornaUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  /**
   * Salva o token do usuario e propaga o seu estado.
   * @param token Sequência de caracteres ao qual um token possui.
   */
  public salvaToken(token: string): void {
    this.tokenService.salva(token);
    this.decodificaJWT();
  }

  /**
   * Exclui o token e limpa o estado do usuário.
   */
  public logout(): void {
    this.tokenService.exclui();
    this.usuarioSubject.next({});
  }

  /**
   * Verifica se existe um token para o usuário.
   * @returns true se possuir (logado). Caso contrário, false (não logado).
   */
  public estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
