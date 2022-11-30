import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Episodios } from '../episodios/interfaces/episodios';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  url:string = "https://rickandmortyapi.com/api";

  constructor(private http: HttpClient) { }


  obtenerEpisodios(): Observable<Episodios[]>{
    const episodios: string = `${this.url}/character/?count=6`;

    return this.http.get<Episodios[]>(episodios);
  }
}
