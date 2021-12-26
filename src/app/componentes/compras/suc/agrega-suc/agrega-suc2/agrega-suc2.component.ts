import {AfterViewInit, Component, Inject, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


import { IArticuloSuc, IArticuloSuc1, IConsultaSuc, IDetalleSuc1 } from 'src/app/interface/suc';

import Swal from 'sweetalert2';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { IngresoArtSucComponent } from './ingreso-art-suc/ingreso-art-suc.component';

@Component({
  selector: 'app-agrega-suc2',
  templateUrl: './agrega-suc2.component.html',
  styleUrls: ['./agrega-suc2.component.css']
})
export class AgregaSuc2Component implements AfterViewInit {
  @Input()
  agregaArticulo!: FormGroup;

  @Input()
  id!: string;

//datoConsultaPac:  IConsultaPac | undefined;

iArticuloSuc1:IArticuloSuc = {
  codigoArticulo: '', detalle: '',   unidadDeMedida: '', cantidadTotal: '0',  valorUnitario: '0',  montoTotal: '0'
};

  servicio: string='';


datoConsultaSuc: IArticuloSuc[] = [


  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'cantidadTotal',  'valorUnitario',  'montoTotal','opciones'];
  dataSource: MatTableDataSource<IArticuloSuc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient
    ,private dialogRef: MatDialogRef<AgregaSuc2Component>
    , private comprasSucService:ComprasSucService
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.servicio = data;
    this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
  }

  ngOnInit() {

    console.log('arreglo anterior',this.agregaArticulo.value.fechaSolicitud);
  }

  eliminaArticulo(i:any){
  this.datoConsultaSuc.splice(i,1);
    console.log('todo:',this.datoConsultaSuc);
    this.refreshTable()
  }

agregaNuevo(){

/*
    focusConfirm: false,
    preConfirm: () => {
     this.iArticuloSuc1.codigoArticulo=((document.getElementById("codigoArticulo") as HTMLInputElement).value);
      this.iArticuloSuc1.detalle=((document.getElementById("detalle") as HTMLInputElement).value);
      this.iArticuloSuc1.unidadDeMedida=((document.getElementById("unidadDeMedida") as HTMLInputElement).value);
      this.iArticuloSuc1.cantidadTotal=((document.getElementById("cantidadTotal") as HTMLInputElement).value);
      this.iArticuloSuc1.valorUnitario=((document.getElementById("valorUnitario") as HTMLInputElement).value);
      this.iArticuloSuc1.montoTotal=((document.getElementById("montoTotal") as HTMLInputElement).value);
      this.datoConsultaSuc.push(this.iArticuloSuc1);
      this.refreshTable();
    }
  })
*/
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.height = '90%';
  dialogConfig.position = { top : '2%'};
  dialogConfig.data = {};
//  dialogConfig.data = {
//    idProducto: idProdP,
//    titulo: tituloP
//  };


  this.dialog.open(IngresoArtSucComponent, dialogConfig)
  .afterClosed().subscribe(
   data => {console.log('Dialog output3333:', data);
            if (data !== undefined) {
              this.iArticuloSuc1.codigoArticulo=(data.codigoArticulo);
      this.iArticuloSuc1.detalle=(data.descripcion);
      this.iArticuloSuc1.unidadDeMedida=(data.unidad);
      this.iArticuloSuc1.cantidadTotal=(data.cantidadTotal);
      this.iArticuloSuc1.valorUnitario=(data.valorUnitario);
      this.iArticuloSuc1.montoTotal=(data.cantidadTotal +data.valorUnitario);
      this.datoConsultaSuc.push(this.iArticuloSuc1);
                this.refreshTable();
            }
    }
  );
}



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private refreshTable() {
  console.log('pp:',this.datoConsultaSuc);
  this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
    this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  cerrar() {
    this.dialogRef.close();
  }

  getTotalCost() {
     return this.datoConsultaSuc.map(t => parseInt(t.montoTotal)).reduce((acc, value) => acc + value, 0);
  }



  enviar(){
    let formatoDate = (moment(this.agregaArticulo.value.fechaSolicitud)).format('YYYY-MM-DD')
console.log('fecha:',formatoDate)
    this.comprasSucService
    .putDataSucCrea(formatoDate,this.agregaArticulo.value.servicio,this.agregaArticulo.value.responsable)
    .subscribe((res: {}) => {
      console.log('respuesta graba cabecera: ', res);
      this.grabarArticulo();
        this.dialogRef.close(1);

    },
    // console.log('yo:', res as PerfilI[]),
    error => {
      console.log('error carga:', error);
      Swal.fire(
        'ERROR INESPERADO',
        error,
       'info'
     );
    }
  );
  }

  grabarArticulo(){
    for (var valor in this.dataSource.data){

          this.comprasSucService
        .putDataSucCreaArticulo(this.id,this.dataSource.data[valor].codigoArticulo,this.dataSource.data[valor].cantidadTotal,this.dataSource.data[valor].valorUnitario)
        .subscribe((res: {}) => {
          console.log('graba articulo: ', res);

        },
        // console.log('yo:', res as PerfilI[]),
        error => {
          console.log('error carga:', error);
          Swal.fire(
            'ERROR INESPERADO',
            error,
          'info'
        );
        }
      );
      }
      Swal.fire(
        'Se grabó con Éxito',
        'Click en Botón!',
        'success'
      ); // ,
    }

    compruebaValidoEntero(event: any){

      ((document.getElementById("unidadDeMedida") as HTMLInputElement).value)= event.target.value;
     // }
    }

}

