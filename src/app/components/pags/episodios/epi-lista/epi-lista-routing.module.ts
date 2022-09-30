import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpiListaComponent } from './epi-lista.component';

const routes: Routes = [{ path: '', component: EpiListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpiListaRoutingModule { }
