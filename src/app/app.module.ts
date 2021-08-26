import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//------------------
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/home/inicio/inicio.component';
import { ProcesoComponent } from './components/home/proceso/proceso.component';
import { HistoriaComponent } from './components/home/historia/historia.component';
import { ComprarComponent } from './components/home/comprar/comprar.component';
import { AmigosComponent } from './components/home/amigos/amigos.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SliderComponent } from './components/slider/slider.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    ProcesoComponent,
    HistoriaComponent,
    ComprarComponent,
    AmigosComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
