import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css'],
})
export class NovoAnimalComponent implements OnInit {
  novoAnimalForm!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private animaisService: AnimaisService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoAnimalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  /**
   * Salva a imagem.
   */
  public upload(): void {
    const allowComments =
      this.novoAnimalForm.get('allowComments')?.value ?? false;

    const description = this.novoAnimalForm.get('description')?.value ?? '';

    this.animaisService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animais'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;

            this.percentualConcluido = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  /**
   * Realiza a leitura de um arquivo e exibe uma prévia do mesmo.
   * @param arquivo O arquivo que será lido.
   */
  public lerArquivo(arquivo: any): void {
    const reader = new FileReader();
    const [file] = arquivo?.files;

    this.file = file;
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
