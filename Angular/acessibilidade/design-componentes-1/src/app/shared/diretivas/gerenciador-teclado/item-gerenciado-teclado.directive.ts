import { EventEmitter } from '@angular/core';
import { Directive, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[appTecladoItem]',
})
export class ItemGerenciadoTecladoDirective {

  @Output() public foco = new EventEmitter<void>();
  constructor(private elementoRef: ElementRef<HTMLElement>) {}

  public aplicandoFoco(): void {
    this.elementoRef.nativeElement.focus();
    this.foco.emit();
  }

  public estaComFoco(): boolean {
    return this.elementoRef.nativeElement === document.activeElement;
  }
}
