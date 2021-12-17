import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacComponent } from './componentes/compras/pac/pac.component';
import { ArsenalComponent } from './componentes/Farmacia/Arsenal/arsenal.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'hospital', component: InicioComponent},

    {path: 'pac', component: PacComponent},
    {path: 'suc', component: PruebaComponent},
    {path: 'oc', component: PruebaComponent},
    {path: 'recepcion', component: PruebaComponent},
    {path: 'consumo', component: PruebaComponent},

    {path: 'arsenal', component: ArsenalComponent},
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
