import { UnicoIdService } from './../../services/id-unico/unico-id.service';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sim-nao-botao-grupo',
  templateUrl: './sim-nao-botao-grupo.component.html',
  styleUrls: ['./sim-nao-botao-grupo.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SimNaoBotaoGrupoComponent),
    },
  ],
})
export class SimNaoBotaoGrupoComponent implements OnInit, ControlValueAccessor {
  @Input() public desabilitado = false;
  @Input() public status!: string;
  @Output() public statusChange = new EventEmitter<string>();
  @Input() public rotulo = '';

  public id!: string;
  public resposta = Resposta;
  public onChange = (valor: string) => {};
  public onTouched = () => {};

  constructor(unicoIdService: UnicoIdService) {
    this.id = unicoIdService.geraUnicoIdComPrefixo('sim-nao-botao-grupo');
  }

  ngOnInit(): void {}

  public writeValue(status: string): void {
    this.status = status;
    this.onChange(this.status);
    this.statusChange.emit(this.status);
  }

  public registerOnChange(func: (valor: string) => void): void {
    this.onChange = func;
  }

  public registerOnTouched(func: () => void): void {
    this.onTouched = func;
  }

  public setDisabledState?(estaDesabilitado: boolean): void {
    this.desabilitado = estaDesabilitado;
  }

  public ativado(status: string): void {
    this.writeValue(status);
  }
}

enum Resposta {
  SIM = 'sim',
  NAO = 'nao',
}
