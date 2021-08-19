import { map, first, switchMap } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  /**
   * Valida o valor digitado no campo de usuário afim de determinar se o mesmo já existe na base de dados.
   * @returns Um objeto com o valor de propriedade como (True), indicando que o usuário já existe. Caso contrário, null.
   */
  public usuarioJaExiste(): object | null {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
