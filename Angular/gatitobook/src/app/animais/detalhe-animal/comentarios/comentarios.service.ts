import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Comentario, Comentarios } from './comentario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Recupera os comentários de uma foto de acordo com o seu ID.
   * @param id Identificador da imagem.
   * @returns Um Observable com os comentários.
   */
  public busca(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  public inclui(id: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
