import { Component, OnInit } from '@angular/core';
import { Episodio } from '@app/shrd/components/interface/episodios.interface';
import { EpisodioService } from '@app/shrd/services/episodio.service';
import {take} from "rxjs/operators";

type RequestInfo= {
  next: string;
};
@Component({
  selector: 'app-epi-lista',
  templateUrl: './epi-lista.component.html',
  styleUrls: ['./epi-lista.component.scss']
})
export class EpiListaComponent implements OnInit {
  episodios: Episodio[]=[];
  info: RequestInfo={
    next: 'null',
  };
  private pageNum=1;
  private query: string ="films";

  constructor(private episodioSvc: EpisodioService) { }

  ngOnInit(): void {
    this.getDatosDeServicio();
  }

  private getDatosDeServicio (): void{
    this.episodios= [];
    this.episodioSvc.peliculas()
    .pipe(
      take(1)
    ).subscribe((res:any) =>{
      this.episodios = res;
    })
  }
}
