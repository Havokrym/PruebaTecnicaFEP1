import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  redirectTo:'inicio',
  pathMatch: 'full',
},

  { path: 'inicio',
   loadChildren: () => 
   import('./components/pags/inicio/inicio.module').then(m => m.InicioModule) 
  },
  { path: 'epi-lista',
   loadChildren: () => 
   import('./components/pags/episodios/epi-lista/epi-lista.module').then(m => m.EpiListaModule) 
  }, 
  { path: 'epi-detalles/:id',
   loadChildren: () => 
   import('./components/pags/episodios/epi-detalles/epi-detalles.module').then(m => m.EpiDetallesModule) 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
