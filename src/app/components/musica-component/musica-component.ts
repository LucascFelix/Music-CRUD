import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelMusic } from '../../../Musica';
import { MusicService } from '../../music-service';

@Component({
  selector: 'app-musica-component',
  standalone: false,
  templateUrl: './musica-component.html',
  styleUrl: './musica-component.css'
})
export class MusicaComponent implements OnInit{
  musicas: ModelMusic[] = [];
  formGroupMusic: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: MusicService) {

    this.formGroupMusic = formBuilder.group({
      name: [''],
      artista: [''],
      banda: [''],
      genero: [''],
      ano: ['']
    });

  }
  save() {
    this.service.save(this.formGroupMusic.value).subscribe(
      {
        next: json => {
                        this.musicas.push(json);
                        this.formGroupMusic.reset();
                      }
      }
    )
  }

    ngOnInit(): void {
    this.service.getAllProducts().subscribe(
          {
              next: json => this.musicas = json
          }
      );
  }

  delete(product: ModelMusic) {
    this.service.delete(product).subscribe(
      {
        next: () => {
          this.musicas = this.musicas.filter(m => m.id != product.id);
        }
      }
    )
  }

  

}
