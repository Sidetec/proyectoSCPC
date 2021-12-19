import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaConsumoComponent } from './componentes/compras/consumo/agrega-consumo/agrega-consumo.component';
import { PacComponent } from './componentes/compras/pac/pac.component';

import { sucComponent } from './componentes/compras/suc/suc.component';


import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'hospital', component: InicioComponent},

    {path: 'pac', component: PacComponent},
    {path: 'suc', component: sucComponent},
    {path: 'oc', component: PruebaComponent},
    {path: 'recepcion', component: PruebaComponent},
    {path: 'consumo', component: AgregaConsumoComponent},

    {path: 'arsenal', component: PruebaComponent},
    {path: 'climatizacion', component: PruebaComponent},

    {path: 'catalogo', component: PruebaComponent},
    {path: 'gestionDocumental', component: PruebaComponent},
    {path: 'centralizacionContable', component: PruebaComponent},

    {path: 'gestionRequerimientos', component: PruebaComponent},
    {path: 'gestionDocumeevaluacionesntal', component: PruebaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
