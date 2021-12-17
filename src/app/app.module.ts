import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MenulateralComponent } from './componentes/menulateral/menulateral.component';

import { MaterialModule } from './material.module';
import { MenuListaSubMenuComponent } from './componentes/menu-lista-sub-menu/menu-lista-sub-menu.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PacComponent } from './componentes/compras/pac/pac.component';
import { AgregaPacComponent } from './componentes/compras/pac/agrega-pac/agrega-pac.component';
import { ModificaPacComponent } from './componentes/compras/pac/modifica-pac/modifica-pac.component';
import { ConsultaPacComponent } from './componentes/compras/pac/consulta-pac/consulta-pac.component';
import { ArsenalComponent } from './componentes/Farmacia/Arsenal/arsenal.component';
import { AgregaArticuloComponent } from './componentes/Farmacia/Arsenal/agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './componentes/Farmacia/Arsenal/modifica-articulo/modifica-articulo.component';
import { ConsultaArticuloComponent } from './componentes/Farmacia/Arsenal/consulta-articulo/consulta-articulo.component';
import { EliminaArticuloComponent } from './componentes/Farmacia/Arsenal/elimina-articulo/elimina-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    MenuListaSubMenuComponent,
    PruebaComponent,
    InicioComponent,
    PacComponent,
    AgregaPacComponent,
    ModificaPacComponent,
    ConsultaPacComponent,    
    ArsenalComponent,
    ConsultaArticuloComponent,
    AgregaArticuloComponent,
    ModificaArticuloComponent,
    EliminaArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
