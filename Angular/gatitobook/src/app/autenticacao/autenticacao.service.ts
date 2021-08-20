import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url = `${API}/user/login`;

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  /**
   * Realiza a autenticação do usuário.
   * @param usuario Nome de usuário.
   * @param senha Chave de acesso.
   * @returns Um Observable do tipo HttpResponse.
   */
  public autentica(
    usuario: string,
    senha: string
  ): Observable<HttpResponse<any>> {
    const credenciais = { userName: usuario, password: senha };

    return this.httpClient
      .post(this.url, credenciais, { observe: 'response' })
      .pipe(
        tap((response) => {
          const tokenAutenticacao =
            response.headers.get('x-access-token') ?? '';

          this.usuarioService.salvaToken(tokenAutenticacao);
        })
      );
  }
}
