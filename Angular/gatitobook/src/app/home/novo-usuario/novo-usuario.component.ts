import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuario: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) {}

  /**
   * Cria um novo (FormGroup).
   * Executa após a inicialização e injeção das dependências da classe.
   */
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        userName: [
          '',
          Validators.required,
          this.usuarioExisteService.usuarioJaExiste(),
        ],
        email: [
          '',
          [Validators.required, Validators.email, minusculoValidator],
        ],
        fullName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      },
      { Validators: [usuarioSenhaIguaisValidator] }
    );
  }

  /**
   * Realiza o cadastro de um novo usuário.
   */
  public onCadastrar(): void {
    if (this.novoUsuarioForm.valid) {
      /* Obtém um novo usuário com base nos parâmetros obtidos do formulário. */
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      this.novoUsuario.cadastra(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
