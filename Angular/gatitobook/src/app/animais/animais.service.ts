import { environment } from './../../environments/environment';
import { Animais, Animal } from './animais';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  /**
   * Obtém a relação de imagens para um determinado usuário.
   * @param nomeDoUsuario O nome do usuário logado.
   * @returns Um Observable com a relação de imagens.
   */
  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  /**
   * Busca imagem de acordo com o seu ID.
   * @param id Identificador da imagem.
   * @returns Um Observable com a imagem.
   */
  public buscaPorId(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  /**
   * Exclui uma imagem de acordo com seu ID.
   * @param id Identificador da imagem.
   * @returns Um Observable da imagem deletada.
   */
  public excluiAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }

  /**
   * Curti uma imagem de acordo com o seu ID.
   * @param id Identificador da imagem.
   * @returns Observable com true ou false.
   */
  public curtir(id: number): Observable<boolean> {
    return this.httpClient
      .post<boolean>(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }
}
