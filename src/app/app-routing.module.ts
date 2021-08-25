import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HOME_ROUTES } from './components/home/home-router.module'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SliderComponent } from './components/slider/slider.component';
import { AmigosComponent } from './components/home/amigos/amigos.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: '',component: HomeComponent,children:HOME_ROUTES},
  {path: 'navbar',component:NavbarComponent},
  {path: 'slider',component:SliderComponent},
  {path:'amigos',component:AmigosComponent},
  {path:'footer',component:FooterComponent},
  {path:'formulario',component:FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
