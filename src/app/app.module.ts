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
import { GestionDocumentalComponent } from './componentes/activo-fijo/gestiondocumental/gestiondocumental.component';
import { CentralizacionContableComponent } from './componentes/activo-fijo/centralizacioncontable/centralizacioncontable.component';
import { OcComponent } from './componentes/compras/oc/oc.component';
import { ClimaComponent } from './componentes/farmacia/Climatizacion/clima.component';
import { ArsenalComponent } from './componentes/farmacia/Arsenal/arsenal.component';
import { ModificaArticuloComponent } from './componentes/farmacia/Arsenal/modifica-articulo/modifica-articulo.component';
import { EliminaArticuloComponent } from './componentes/farmacia/Arsenal/elimina-articulo/elimina-articulo.component';
import { ConsultaArticuloComponent } from './componentes/farmacia/Arsenal/consulta-articulo/consulta-articulo.component';
import { AgregaArticuloComponent } from './componentes/farmacia/Arsenal/agrega-articulo/agrega-articulo.component';
import { ConsultaOcComponent } from './componentes/compras/oc/consulta-oc/consulta-oc.component';
import { RecepcionComponent } from './componentes/compras/recepcion/recepcion/recepcion.component';
import { ActivoFijoComponent } from './componentes/activo-fijo/activo-fijo.component';
import { ConsultaActivoFijoComponent } from './componentes/activo-fijo/consulta-activo-fijo/consulta-activo-fijo.component';
import { ReporteDepreciacionComponent } from './componentes/activo-fijo/reporte-depreciacion/reporte-depreciacion.component';
import { ResumenInventarioComponent } from './componentes/activo-fijo/resumen-inventario/resumen-inventario.component';
import { AlertaActivoComponent } from './componentes/activo-fijo/alerta-activo/alerta-activo.component';
import { MantencionArchivoComponent } from './componentes/activo-fijo/mantencion-archivo/mantencion-archivo.component';

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
    OcComponent,
    ConsultaPacComponent,
    GestionDocumentalComponent,
    CentralizacionContableComponent,
    AlertasComponent,
    AgregaConsumoComponent,
    ClimaComponent,
    ArsenalComponent,
    ModificaArticuloComponent,
    EliminaArticuloComponent,
    ConsultaArticuloComponent,
    AgregaArticuloComponent,
    ConsultaOcComponent,
    RecepcionComponent,
    ActivoFijoComponent,
    ConsultaActivoFijoComponent,
    ReporteDepreciacionComponent,
    MantencionArchivoComponent,
    ResumenInventarioComponent,
    AlertaActivoComponent
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
