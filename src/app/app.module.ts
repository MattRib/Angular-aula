import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicosComponent,
    ContatosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
