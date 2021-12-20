import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { sucComponent } from './componentes/compras/suc/suc.component';
import { AgregasucComponent } from './componentes/compras/suc/agrega-suc/agrega-suc.component';
import { ModificasucComponent } from './componentes/compras/suc/modifica-suc/modifica-suc.component';
import { ConsultasucComponent } from './componentes/compras/suc/consulta-suc/consulta-suc.component';
import { CancelarSucComponent } from './componentes/compras/suc/cancelarSuc/cancelar-suc.component';
import { AgregaPacComponent } from './componentes/compras/pac/agrega-pac/agrega-pac.component';
import { ModificaPacComponent } from './componentes/compras/pac/modifica-pac/modifica-pac.component';
import { ConsultaPacComponent } from './componentes/compras/pac/consulta-pac/consulta-pac.component';
import { AlertasComponent } from './componentes/compras/pac/alertas/alertas.component';
import { AgregaConsumoComponent } from './componentes/compras/consumo/agrega-consumo/agrega-consumo.component';

import { ArsenalComponent } from './componentes/Farmacia/Arsenal/arsenal.component';
import { AgregaArticuloComponent } from './componentes/Farmacia/Arsenal/agrega-articulo/agrega-articulo.component';
import { ConsultaArticuloComponent } from './componentes/Farmacia/Arsenal/consulta-articulo/consulta-articulo.component';
import { EliminaArticuloComponent } from './componentes/Farmacia/Arsenal/elimina-articulo/elimina-articulo.component';
import { ModificaArticuloComponent } from './componentes/Farmacia/Arsenal/modifica-articulo/modifica-articulo.component';

import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { GestionDocumentalComponent } from './componentes/gestiondocumental/gestiondocumental.component';
import { CentralizacionContableComponent } from './componentes/centralizacioncontable/centralizacioncontable.component';

@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    MenuListaSubMenuComponent,
    PruebaComponent,
    InicioComponent,
    PacComponent,
    sucComponent,
    AgregasucComponent,
    ModificasucComponent,
    ConsultasucComponent,
    CancelarSucComponent,
    AgregaPacComponent,
    ModificaPacComponent,
    ConsultaPacComponent,
    ArsenalComponent,
    AgregaArticuloComponent,
    ConsultaArticuloComponent,
    EliminaArticuloComponent,
    ModificaArticuloComponent,
    CatalogoComponent,
    GestionDocumentalComponent,
    CentralizacionContableComponent,
    AlertasComponent,
    AgregaConsumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
