import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpiDetallesComponent } from './epi-detalles/epi-detalles.component';
import { EpiListaComponent } from './epi-lista/epi-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EpiDetallesComponent,
    EpiListaComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[EpiDetallesComponent,
    EpiListaComponent],
})
export class EpisodiosModule { }
