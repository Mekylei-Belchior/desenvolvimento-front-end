import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string;
  senha: string;

  constructor(
    private autenticacao: AutenticacaoService /* Injeta a classe (AutenticacaoService). */,
    private router: Router /* Injeta a classe (Router). */
  ) {}

  ngOnInit(): void {}

  /**
   * Realiza a autenticação do usuário.
   */
  public onLogin(): void {
    this.autenticacao.autentica(this.usuario, this.senha).subscribe(
      () => {
        /* Se a autenticação for válida, redireciona para a rota (animais). */
        this.router.navigateByUrl('animais');
      },
      (error) => {
        alert('Usuário ou Senha inválido(s).');
      }
    );
  }
}
