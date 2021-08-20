import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais } from './animais';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  /**
   * Obtém a relação de imagens para um determinado usuário.
   * @param nomeDoUsuario O nome do usuário logado.
   * @returns Um Observable com a relação de imagens.
   */
  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    /* Obtém o token do usuário. */
    const token = this.tokenService.recupera();
    /* Define o Header da requisição inserindo o token. */
    const headers = new HttpHeaders().append('x-access-token', token);
    /* Envia uma requisição GET para o endpoint da API. */
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
