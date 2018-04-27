import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { ContatosComponent } from "./contatos/contatos.component";
//import { HeaderComponent } from "./header/header.component";
//import { Pagina1Component } from './pagina1/pagina1.component';
//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'servicos', component: ServicosComponent },
{ path: 'contatos', component: ContatosComponent }
//{ path: 'header', component: HeaderComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}