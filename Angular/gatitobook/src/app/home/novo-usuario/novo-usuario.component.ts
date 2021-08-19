import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    novoUsuario: NovoUsuarioService
  ) {}

  /**
   * Cria um novo (FormGroup).
   * Executa após a inicialização e injeção das dependências da classe.
   */
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      userName: [''],
      email: [''],
      fullname: [''],
      password: [''],
    });
  }

  /**
   * Realiza o cadastro de um novo usuário.
   */
  public onCadastrar(): void {
    /* Obtém um novo usuário com base nos parâmetros obtidos do formulário. */
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.table(novoUsuario);
  }
}
