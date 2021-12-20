import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaConsumoComponent } from './componentes/compras/consumo/agrega-consumo/agrega-consumo.component';
import { PacComponent } from './componentes/compras/pac/pac.component';
import { sucComponent } from './componentes/compras/suc/suc.component';

import { ArsenalComponent } from './componentes/Farmacia/Arsenal/arsenal.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { GestionDocumentalComponent } from './componentes/gestiondocumental/gestiondocumental.component';
import { CentralizacionContableComponent } from './componentes/centralizacioncontable/centralizacioncontable.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'hospital', component: InicioComponent},

    {path: 'pac', component: PacComponent},
    {path: 'suc', component: sucComponent},
    {path: 'oc', component: PruebaComponent},
    {path: 'recepcion', component: PruebaComponent},
    {path: 'consumo', component: AgregaConsumoComponent},

    {path: 'arsenal', component: ArsenalComponent},
    {path: 'climatizacion', component: ClimaComponent},

    {path: 'catalogo', component: CatalogoComponent},
    {path: 'gestionDocumental', component: GestionDocumentalComponent},
    {path: 'centralizacionContable', component: CentralizacionContableComponent},

    {path: 'gestionRequerimientos', component: PruebaComponent},
    {path: 'gestionDocumeevaluacionesntal', component: PruebaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
