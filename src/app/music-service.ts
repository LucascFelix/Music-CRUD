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

  save(product: ModelMusic): Observable<ModelMusic>{
    return this.http.post<ModelMusic>(this.apiUrl, product);
  }

  delete(product: ModelMusic): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${product.id}`);
 }




}
