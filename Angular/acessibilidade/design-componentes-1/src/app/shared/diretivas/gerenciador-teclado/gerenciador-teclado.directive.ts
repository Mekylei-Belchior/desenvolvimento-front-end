import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { ItemGerenciadoTecladoDirective } from './item-gerenciado-teclado.directive';

@Directive({
  selector: '[appTeclado]',
})
export class GerenciadorTecladoDirective {

  @ContentChildren(ItemGerenciadoTecladoDirective)
  public itens!: QueryList<ItemGerenciadoTecladoDirective>;

  @HostListener('keyup', ['$event'])
  public gerenciadorTeclas(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('cima');
        this.move(Direcao.DIREITA).aplicandoFoco();
        break;
      case 'ArrowDown':
        console.log('baixo');
        this.move(Direcao.ESQUERDA).aplicandoFoco();
        break;
      case 'ArrowLeft':
        console.log('esquerda');
        this.move(Direcao.ESQUERDA).aplicandoFoco();
        break;
      case 'ArrowRight':
        console.log('direita');
        this.move(Direcao.DIREITA).aplicandoFoco();
        break;
    }
  }

  public move(direcao: Direcao): ItemGerenciadoTecladoDirective {
    const itens = this.itens.toArray();
    const indiceElementoComFoco = itens.findIndex(item => item.estaComFoco());
    const elementoReceberaFoco = itens[indiceElementoComFoco + direcao];

    if (elementoReceberaFoco) {
      return elementoReceberaFoco;
    }

    return direcao === Direcao.ESQUERDA ? itens[itens.length - 1] : itens[0];
  }
}

enum Direcao {
  ESQUERDA = -1,
  DIREITA = 1
}
