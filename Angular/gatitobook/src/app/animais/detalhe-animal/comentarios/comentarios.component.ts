import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from './comentarios.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() animalId!: number;

  comentarioForm!: FormGroup;
  comentarios$!: Observable<Comentarios>;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.busca(this.animalId);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  /**
   * Salva o novo comentário.
   */
  public gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .inclui(this.animalId, comentario)
      .pipe(
        switchMap(() => this.comentariosService.busca(this.animalId)),
        tap(() => {
          this.comentarioForm.reset();
          alert('O comentário foi salvo!');
        })
      );
  }
}
