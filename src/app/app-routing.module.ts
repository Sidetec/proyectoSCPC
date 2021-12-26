import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaConsumoComponent } from './componentes/compras/consumo/agrega-consumo/agrega-consumo.component';
import { PacComponent } from './componentes/compras/pac/pac.component';

import { sucComponent } from './componentes/compras/suc/suc.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { GestionDocumentalComponent } from './componentes/activo-fijo/gestiondocumental/gestiondocumental.component';
import { CentralizacionContableComponent } from './componentes/activo-fijo/centralizacioncontable/centralizacioncontable.component';

import { OcComponent } from './componentes/compras/oc/oc.component';
//import { ArsenalComponent } from './componentes/farmacia/arsenal/arsenal.component';
import { RecepcionComponent } from './componentes/compras/recepcion/recepcion/recepcion.component';
import { ActivoFijoComponent } from './componentes/activo-fijo/activo-fijo.component';
import { ClimatizacionComponent } from './componentes/farmacia/climatizacion/climatizacion.component';
import { EncuestasComponent } from './componentes/generales/encuestas/encuestas.component';
import { ReportesComponent } from './componentes/generales/reportes/reportes.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'hospital', component: InicioComponent},

    {path: 'pac', component: PacComponent},
    {path: 'suc', component: sucComponent},
    {path: 'oc', component: OcComponent},
    {path: 'recepcion', component: RecepcionComponent},
    {path: 'consumo', component: AgregaConsumoComponent},

    //{path: 'arsenal', component: ArsenalComponent},
    {path: 'climatizacion', component: ClimatizacionComponent},


    {path:'activofijo', component:ActivoFijoComponent},
    {path: 'gestionDocumental', component: GestionDocumentalComponent},
    {path: 'centralizacionContable', component: CentralizacionContableComponent},

    {path: 'reportes', component: ReportesComponent},
    {path: 'encuestas', component: EncuestasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
