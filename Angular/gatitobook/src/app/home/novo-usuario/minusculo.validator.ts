import { AbstractControl } from '@angular/forms';

/**
 * Verifica se o valor é minúsculo.
 * @param control O elemento que será validado.
 * @returns Um objeto em caso de erro e (null), em caso contrário.
 */
export function minusculoValidator(control: AbstractControl): object | null {
  const valor = control.value as string;

  if (valor !== valor.toLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}
