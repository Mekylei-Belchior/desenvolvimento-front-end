import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  /* Guarda o estado da classe Usuario. */
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  /**
   * Realiza o logout do usuário.
   */
  public logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
