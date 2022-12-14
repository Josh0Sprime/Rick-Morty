import { Component , OnInit} from '@angular/core';
import { RickService } from '../services/rick.service';
import { Episodios } from './interfaces/episodios';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit{

  personajes: any[] = [];

  constructor(private sv: RickService){

  }
  ngOnInit(): void {
    this.sv.obtenerEpisodios().subscribe((resp: any) => {
      console.log(resp);
      this.personajes = resp.results
    })
  }

}
