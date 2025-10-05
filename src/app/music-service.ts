import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelMusic } from '../Musica';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  apiUrl = "http://localhost:3000/musicas";
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ModelMusic[]>{
    return this.http.get<ModelMusic[]>(this.apiUrl);
  }

  save(musicas: ModelMusic): Observable<ModelMusic>{
    return this.http.post<ModelMusic>(this.apiUrl, musicas);
  }

  delete(musicas: ModelMusic): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${musicas.id}`);
 }

 update(musicas: ModelMusic): Observable<ModelMusic>{
    return this.http.put<ModelMusic>(`${this.apiUrl}/${musicas.id}`, musicas);
}




}
