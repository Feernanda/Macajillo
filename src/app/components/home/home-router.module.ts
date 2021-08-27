import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { HistoriaComponent } from './historia/historia.component';
import { InicioComponent } from './inicio/inicio.component';
import { MixologiaComponent } from './mixologia/mixologia.component';

export const HOME_ROUTES: Routes = [
  {path: 'inicio',component: InicioComponent},
  {path:'historia',component:HistoriaComponent},
  {path:'comprar',component:ComprarComponent},
  { path : 'mixologia',component:MixologiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(HOME_ROUTES)],
  exports: [RouterModule],
  declarations: [MixologiaComponent]
})
export class AppRoutingModule { }
