import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpiDetallesComponent } from './epi-detalles.component';

const routes: Routes = [{ path: '', component: EpiDetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpiDetallesRoutingModule { }
