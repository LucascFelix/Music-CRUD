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
export class MusicaComponent implements OnInit {


  musicas: ModelMusic[] = [];
  formGroupMusic: FormGroup;
  isEditing: boolean = false;


  constructor(private formBuilder: FormBuilder, private service: MusicService) {

    this.formGroupMusic = formBuilder.group({
      id: [''],
      name: [''],
      artista: [''],
      banda: [''],
      genero: [''],
      ano: ['']
    });

  }
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      {
        next: json => this.musicas = json
      }
    );
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



  delete(musicas: ModelMusic) {
    this.service.delete(musicas).subscribe(
      {
        next: () => {
          this.musicas = this.musicas.filter(m => m.id != musicas.id);
        }
      }
    )
  }

  onClickUpdate(musicas: ModelMusic) {
    this.formGroupMusic.setValue(musicas);
    this.isEditing = true;
  }

  update() {
     this.service.update(this.formGroupMusic.value).subscribe(
        {
          next: json => {
            let index = this.musicas.findIndex(m => m.id == json.id);
            this.musicas[index] = json;
            this.isEditing = false;
            this.formGroupMusic.reset();
          }
        }
      )
  }




}
