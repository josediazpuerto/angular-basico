import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';
//import { HeroeComponent } from './Heroes/Heroe/heroe.component';
//import { ContadorComponent } from './Contador/contador/contador.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeroeComponent
    //ContadorComponent   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
