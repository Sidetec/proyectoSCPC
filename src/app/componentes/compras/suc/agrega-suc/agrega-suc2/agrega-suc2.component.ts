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

@Component({
  selector: 'app-agrega-suc2',
  templateUrl: './agrega-suc2.component.html',
  styleUrls: ['./agrega-suc2.component.css']
})
export class AgregaSuc2Component implements AfterViewInit {
  @Input()
  agregaArticulo!: FormGroup;

  resultado=0;
  iva=964;
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
  Swal.fire({
    title: "Ingreso de Artículo",

    showCancelButton: true,
    confirmButtonText: "Confirm",
    html:

    '<form> ' +
    ' <div class="form-group row"> ' +
    '  <label for="inputCodigoArticulo" class="col-sm-5 col-form-label">Código Artículo </label> ' +
    '  <div class="col-sm-7"> ' +
    '    <input  class="form-control" id="codigoArticulo" placeholder="Código Artículo"> ' +
    '  </div> ' +
    ' </div> ' +

  ' <div class="form-group row"> ' +
  '  <label for="inputDetalle" class="col-sm-5 col-form-label">Detalle</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="detalle" placeholder="Detalle"> ' +
  '  </div> ' +
  ' </div> ' +

  ' <div class="form-group row"> ' +
  '  <label for="inputUnidadDeMedida" class="col-sm-5 col-form-label">Unidad de Medida</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="unidadDeMedida" placeholder="Unidad de Medida"> ' +
  '  </div> ' +
  ' </div> ' +

  ' <div class="form-group row"> ' +
  '  <label for="inputCantidadTotal" class="col-sm-5 col-form-label">Cantidad Total</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="cantidadTotal" placeholder="Canidad Total"> ' +
  '  </div> ' +
  ' </div> ' +

  ' <div class="form-group row"> ' +
  '  <label for="inputValorUnitario" class="col-sm-5 col-form-label">Valor Unitario</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="valorUnitario" placeholder="Valor Unitario"> ' +
  '  </div> ' +
  ' </div> ' +

  ' <div class="form-group row"> ' +
  '  <label for="inputValorUnitario" class="col-sm-5 col-form-label">Valor Unitario</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="valorUnitario" placeholder="Valor Unitario"> ' +
  '  </div> ' +
  ' </div> ' +

  ' </form> ',


    focusConfirm: false,
    preConfirm: () => {
     this.iArticuloSuc1.codigoArticulo=((document.getElementById("codigoArticulo") as HTMLInputElement).value);
      this.iArticuloSuc1.detalle=((document.getElementById("detalle") as HTMLInputElement).value);
      this.iArticuloSuc1.unidadDeMedida=((document.getElementById("unidadDeMedida") as HTMLInputElement).value);
      this.iArticuloSuc1.cantidadTotal=((document.getElementById("cantidadTotal") as HTMLInputElement).value);
      this.iArticuloSuc1.valorUnitario=((document.getElementById("valorUnitario") as HTMLInputElement).value);
      this.datoConsultaSuc.push(this.iArticuloSuc1);
      this.refreshTable();
    }
  })
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

  getTotalCostIva() {
    return this.resultado= (this.datoConsultaSuc.map(t => parseInt(t.montoTotal)).reduce((acc, value) => acc + value, 0) + this.iva);
  }

  enviar(){

    this.comprasSucService
    .putDataSucCrea('5',this.agregaArticulo.value.fechaSolicitud,this.agregaArticulo.value.servicio,this.agregaArticulo.value.responsable,this.agregaArticulo.value.motivoCompra)
    .subscribe((res: {}) => {
      console.log('suc: ', res);
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
        .putDataSucCreaArticulo('10',this.dataSource.data[valor].codigoArticulo,this.dataSource.data[valor].detalle,this.dataSource.data[valor].unidadDeMedida,this.dataSource.data[valor].cantidadTotal,this.dataSource.data[valor].valorUnitario,this.dataSource.data[valor].montoTotal)
        .subscribe((res: {}) => {
          console.log('suc: ', res);

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
}

