import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalID;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  /**
   * Adiciona uma nova curtida a imagem.
   */
  public curtir(): void {
    this.animaisService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animaisService.buscaPorId(this.animalId);
      }
    });
  }

  /**
   * Exclui a imagem em destaque.
   */
  public excluir(): void {
    this.animaisService.excluiAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
