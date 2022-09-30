import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Episodio } from '../components/interface/episodios.interface';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  constructor(private http: HttpClient) { }

  datosPelicula: any = [];
  detallsPelicula: any = [];
  peliculas(){
    this.datosPelicula = [];
    const filtro = `${environment.baseUrlAPI}`;
    return this.http.get(filtro).pipe(
      map((res: any) => {
        //titulo, director, no. episodio y año 
        console.log(res);
        res?.results?.map((element: any) => {
          this.datosPelicula.push({
            titulo: element.title,
            director: element.director,
            episodio: element.episode_id,
            lanzamiento: element.release_date
          });
        })
        return this.datosPelicula;
      })
    );
  }

  getDetalles(id:number){
    this.detallsPelicula = [];
    return this.http.get(`${environment.baseUrlAPI}/${id}`).pipe(
      map((res: any) =>{

          this.detallsPelicula.push({
            titulo: res.title,
            director: res.director,
            episodio: res.episode_id,
            lanzamiento: res.release_date,
            
            naves: res.starships,
            personajes: res.characters,
            planetas: res.planets
          });

      return this.detallsPelicula;
      })
    );
  }

  getPersonajesURL(id: number) {
    return this.http.get(`${environment.baseUrlAPI}/${id}`).pipe(
      map((res: any) =>{
        return res.characters
      })
    );
  }

  getPlanetasURL(id: number) {
    return this.http.get(`${environment.baseUrlAPI}/${id}`).pipe(
      map((res: any) =>{
        return res.planets
      })
    );
  }

  getNavesURL(id: number) {
    return this.http.get(`${environment.baseUrlAPI}/${id}`).pipe(
      map((res: any) =>{
        return res.starships
      })
    );
  }

  getPersonas(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.name;
      })
    );
  }

  getPlanetas(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.name;
      })
    );
  }

  getNaves(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.name;
      })
    );
  }
}
