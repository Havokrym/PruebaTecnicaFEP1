import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episodio } from '@app/shrd/components/interface/episodios.interface';
import { EpisodioService } from '@app/shrd/services/episodio.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-epi-detalles',
  templateUrl: './epi-detalles.component.html',
  styleUrls: ['./epi-detalles.component.scss']
})
export class EpiDetallesComponent implements OnInit, OnChanges {
  depisodios: any[]=[];
  dPersonaje: string[] = [];
  dPlaneta: string[] = [];
  dNave: string[] = [];
  urlPersonajes: string[] = [];
  urlPlanetas: string[] = [];
  urlNaves: string[] = [];

  constructor(private epiSvc: EpisodioService, private activo: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerDetalles()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.obtenerDetalles();
  }

  obtenerDetalles() {
    this.depisodios =[];
    this.dPersonaje = [];
    this.dPlaneta = [];
    this.dNave = [];
    this.urlPersonajes = [];
    this.urlPlanetas = [];
    this.urlNaves = [];
    this.activo.params.pipe(take(1)).subscribe((params)=> {
      console.log("this,depisodios", this.depisodios)
      let id= params["id"]
      switch(id) {
        case '1':
          id = 4;
        break;

        case '2':
          id = 5;
        break;

        case '3':
          id = 6;
        break;

        case '4':
          id = 1;
        break;

        case '5':
          id = 2;
        break;

        case '6':
          id = 3;
        break;

        default:
          id = 0;
      }
      this.epiSvc.getDetalles(id)
      .pipe(take(1)).subscribe((res: any)=> {
        console.log(res)
        this.depisodios = res;
      })

      this.epiSvc.getPersonajesURL(id)
      .pipe(take(1)).subscribe((res: any)=> {
        console.log(res)
        this.urlPersonajes = res;

        this.urlPersonajes.map((url: string) => {
          this.epiSvc.getPersonas(url).pipe(
            take(1)
          ).subscribe(
            (personaje: string) => {
              this.dPersonaje = [...this.dPersonaje, personaje];
              this.dPersonaje = this.dPersonaje.sort();
              console.log("this.dPersonaje", this.dPersonaje)
            }
          )
        })
      })

      this.epiSvc.getPlanetasURL(id)
      .pipe(take(1)).subscribe((res: any)=> {
        console.log(res)
        this.urlPlanetas = res;

        this.urlPlanetas.map((url: string) => {
          this.epiSvc.getPlanetas(url).pipe(
            take(1)
          ).subscribe(
            (planeta: string) => {
              this.dPlaneta = [...this.dPlaneta, planeta];
              this.dPlaneta = this.dPlaneta.sort();
              console.log("this.dPlaneta", this.dPlaneta)
            }
          )
        })
      })

      this.epiSvc.getNavesURL(id)
      .pipe(take(1)).subscribe((res: any)=> {
        console.log(res)
        this.urlNaves = res;

        this.urlNaves.map((url: string) => {
          this.epiSvc.getNaves(url).pipe(
            take(1)
          ).subscribe(
            (nave: string) => {
              this.dNave = [...this.dNave, nave];
              this.dNave = this.dNave.sort();
              console.log("this.dNave", this.dNave)
            }
          )
        })
      })

    })
  }
}
