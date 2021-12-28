import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy,Input } from '@angular/core';
//import { IConsultaLoginPerfil, IInicio, IMenuLateral } from '@app/interface/inicio';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
//import { MenuLateralService } from '@app/servicio/menu-lateral.service';
import Swal from 'sweetalert2';
import { IMenu } from 'src/app/interface/menu';


@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnDestroy {

  tituloModulo= '';

  //tituloModulo: string;
  //parametro: IInicio;
  nombreBonoModulo: string ='';

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  //datoMenuLateralBase: IConsultaLoginPerfil[];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private location: Location
    /*private menuLateralService: MenuLateralService*/) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._MOBILEQUERYLISTENER = () => changeDetectorRef.detectChanges();
    // deprecated: MediaQueryList.addListener(listener);

    this.mobileQuery.addEventListener('change', this._MOBILEQUERYLISTENER);

  }

  mobileQuery: MediaQueryList;



  fillerNav: IMenu[]= [

        {
          titulo: 'Compra',
          tituloMenu: 'Compras',
          iconName: 'local_hospital',
          disabled: false,
          children: [
            {
              titulo: 'Compra - Plan Anual de Compra',
              tituloMenu: 'PAC',
              iconName: 'send icon',
              route: 'pac',
              disabled: false
            },
            {
              titulo: 'Compra - Solicitudes Únicas de Compra ',
              tituloMenu: 'SUC',
              iconName: 'send icon',
              route: 'suc',
              disabled: false
            },
            {
              titulo: 'Compra - Ordenes de Compra',
              tituloMenu: 'O/C',
              iconName: 'send icon',
              route: 'oc',
              disabled: false
            },
            {
              titulo: 'Compra - Recepción Artículos',
              tituloMenu: 'Recepción',
              iconName: 'send icon',
              route: 'recepcion',
              disabled: false
            },
            {
              titulo: 'Compra - Consumo',
              tituloMenu: 'Consumo',
              iconName: 'send icon',
              route: 'consumo',
              disabled: false
            },
          ],
        },

        {
          titulo: 'Farmacia',
          tituloMenu: 'Farmacia',
          iconName: 'local_hospital',
          disabled: false,
          children: [
            {
              titulo: 'Farmacia - Arsenal Farmacológico',
              tituloMenu: 'Arsenal',
              iconName: 'send icon',
              route: 'arsenal',
              disabled: false
            },
            {
              titulo: 'Farmacia - Climatización',
              tituloMenu: 'Climatización',
              iconName: 'send icon',
              route: 'climatizacion',

              disabled: false
            }

          ]
        },
        {
          titulo: 'Activo Fijo',
          tituloMenu: 'Activo Fijo',
          iconName: 'local_hospital',
          disabled: false,
          children: [
            {
              titulo: 'Activo Fijo - Catálogo de Activos Fijos',
              tituloMenu: 'Catálogo',
              iconName: 'send icon',
              route: 'catalogo',
              disabled: false
            },
            {
              titulo: 'Activo Fijo - Documentos Asociados al Activo',
              tituloMenu: 'Gestión Documental',
              iconName: 'send icon',
              route: 'gestionDocumental',
              disabled: false
            },
            {
              titulo: 'Activo Fijo - Centralización Contable',
              tituloMenu: 'Centralización Contable',
              iconName: 'send icon',
              route: 'centralizacionContable',
              disabled: false
            },
          ]
        },
        {
          titulo: 'Generales',
          tituloMenu: 'Generales',
          iconName: 'local_hospital',
          disabled: false,
          children: [
            {
              titulo: 'Generales - Gestión Requerimientos',
              tituloMenu: 'Gestión Requerimientos',
              iconName: 'send icon',
              route: 'reportes',
              disabled: false
            },
            {
              titulo: 'Generales - Evaluaciones',
              tituloMenu: 'Evaluaciones',
              iconName: 'send icon',
              route: 'encuestas',
              disabled: false
            },
          ]
        },

        {
          titulo: 'CERRAR',
          tituloMenu: 'cerrar',
          iconName: 'cancel_presentation',
          route: 'cerrar',
          disabled: false
        },
      ];

      private _MOBILEQUERYLISTENER: () => void;

      shouldRun = true;

  ngOnInit() {
   // this.getListMenu(this.parametro.usuario);
  }

  /*getListMenu(usuario){
   console.log('menu lateral 1',usuario);
    this.menuLateralService
      .getDataConsultaLoginPerfil(usuario)
      .subscribe(res => {
        console.log('menu lateral ips:', res);
        if(res!=null){
          this.datoMenuLateralBase= res['resultado'].serviciosUsuario;
          console.log('menu lateral ips2:', this.datoMenuLateralBase);
          for(let a=0; a<this.datoMenuLateralBase.length; a++){
            for(let b=0; b<this.fillerNav.length; b++){
              if (this.fillerNav[b].children && this.fillerNav[b].children.length) {
                for(let c=0; c<this.fillerNav[b].children.length; c++){
                  console.log('IPS:',this.datoMenuLateralBase[a].codigoServicio.toUpperCase())
                  console.log('ENTER:',this.fillerNav[b].children[c].route.toUpperCase())
                  if (this.datoMenuLateralBase[a].codigoServicio.toUpperCase() === this.fillerNav[b].children[c].route.toUpperCase().replace("/0","").replace("/1","")){
                    this.fillerNav[b].disabled=false;
                    this.fillerNav[b].children[c].disabled=false;
                  }
                }
              }else{
                if (this.datoMenuLateralBase[a].codigoServicio.toUpperCase() === this.fillerNav[b].route.toUpperCase().replace("/0","").replace("/1","")){
                  this.fillerNav[b].disabled=false;
                }
              }
            }
          }
        }
      },
      error => {
        Swal.fire(
          'ERROR INESPERADO',
          error,
         'info'
       );
      }
    );

  }
*/
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._MOBILEQUERYLISTENER);
  }

  traeTituloModulo(valor:any){
    this.tituloModulo = valor;
  }

  getMenu() {
    return this.fillerNav.filter((item) => item.disabled === false);
  }

}

/**  Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
    */

