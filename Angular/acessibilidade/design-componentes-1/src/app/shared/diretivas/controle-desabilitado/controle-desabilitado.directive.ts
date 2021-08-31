import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDesabilitado]',
})
export class ControleDesabilitadoDirective implements OnChanges {
  @Input() appDesabilitado = false;

  constructor(private ngControl: NgControl) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.appDesabilitado) {
      const metodo = this.appDesabilitado ? 'disable' : 'enable';

      this.ngControl.control?.[metodo]();
    }
  }
}
