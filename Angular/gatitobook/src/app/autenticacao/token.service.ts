import { Injectable } from '@angular/core';
/* Nome da chave do localStorage. */
const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  /**
   * Recupera o token.
   * @returns O token ou uma string vazia.
   */
  public recupera(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  /**
   * Salva o token.
   * @param token Sequência de caracteres ao qual um token possui.
   */
  public salva(token: string): void {
    localStorage.setItem(KEY, token);
  }

  /**
   * Remover a chave do armazenamento.
   */
  public exclui(): void {
    localStorage.removeItem(KEY);
  }

  /**
   * Verifica se a aplicação possui um token.
   * @returns true se possuir. Caso contrário, false.
   */
  public possuiToken(): boolean {
    return !!this.recupera();
  }
}
