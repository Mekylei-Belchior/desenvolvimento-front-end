import { FormGroup } from '@angular/forms';

/**
 * Verifica se os campos de usuário e senha possuem os mesmos valores.
 * @param formGroup O formulário.
 * @returns Objeto com o valor da propriedade (true), indicando que os campos são iguais. Do contrário, null.
 */
export function usuarioSenhaIguaisValidator(
  formGroup: FormGroup
): object | null {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  /* Verifica se os campos possuem valores. */
  if (username.trim() + password.trim()) {
    /* Possuem valor. */
    console.log({usuario: username, senha: password});
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    /* Não possuem valor. */
    return null;
  }
}
