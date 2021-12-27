import {AfterViewInit, Component, Inject, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticuloOcAgrega } from 'src/app/interface/oc';
import { ComprasOcService } from 'src/app/servicios/compras-oc.service';
import * as moment from 'moment';

import { MAT_MENU_DEFAULT_OPTIONS_FACTORY } from '@angular/material/menu/menu';
import { IngresoArtOcComponent } from './ingreso-art-oc/ingreso-art-oc.component';

@Component({
  selector: 'app-agrega-oc2',
  templateUrl: './agrega-oc2.component.html',
  styleUrls: ['./agrega-oc2.component.css']
})
export class AgregaOc2Component implements AfterViewInit {
  @Input()
  agregaArticulo!: FormGroup;

//datoConsultaPac:  IConsultaPac | undefined;

iArticuloOc1:IArticuloOcAgrega = {
  id:'',codigoArticulo: '', detalle: '',   unidadDeMedida: '', cantidadTotal: '0',  valorUnitario: '0',  montoTotal: '0'
};

  id: string='';

  show = true;
datoConsultaOc: IArticuloOcAgrega[] = [ ];

  displayedColumns: string[] = ['id','codigoArticulo', 'detalle',   'unidadDeMedida', 'cantidadTotal',  'valorUnitario',  'montoTotal','opciones'];
  dataSource: MatTableDataSource<IArticuloOcAgrega>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient
    ,private dialogRef: MatDialogRef<AgregaOc2Component>
    ,private comprasOcService:ComprasOcService

) {

    this.dataSource = new MatTableDataSource<IArticuloOcAgrega>();
    ;
  }

  ngOnInit() {

    console.log('arreglo anterior',this.agregaArticulo.value);
  }




  eliminaArticulo(i:any){
  this.datoConsultaOc.splice(i,1);
    console.log('todo:',this.datoConsultaOc);
    this.refreshTable()
  }

agregaNuevo(){
  /*Swal.fire({
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
  '  <label for="inputMontoTotal" class="col-sm-5 col-form-label">Monto Total</label> ' +
  '  <div class="col-sm-7"> ' +
  '    <input  class="form-control" id="montoTotal"  placeholder="montoTotal"> ' +
  '  </div> ' +
  ' </div> ' +

  ' </form> ',


    focusConfirm: false,
    preConfirm: () => {
     this.iArticuloOc1.codigoArticulo=((document.getElementById("codigoArticulo") as HTMLInputElement).value);
      this.iArticuloOc1.detalle=((document.getElementById("detalle") as HTMLInputElement).value);
      this.iArticuloOc1.unidadDeMedida=((document.getElementById("unidadDeMedida") as HTMLInputElement).value);
      this.iArticuloOc1.cantidadTotal=((document.getElementById("cantidadTotal") as HTMLInputElement).value);
      this.iArticuloOc1.valorUnitario=((document.getElementById("valorUnitario") as HTMLInputElement).value);
      this.iArticuloOc1.montoTotal=((document.getElementById("montoTotal") as HTMLInputElement).value);
      this.datoConsultaOc.push(this.iArticuloOc1);
      this.refreshTable();
    }
  })*/
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


  this.dialog.open(IngresoArtOcComponent, dialogConfig)
  .afterClosed().subscribe(
   data => {console.log('Dialog output3333:', data);
            if (data !== undefined) {
              this.iArticuloOc1.id=(data.id);
              this.iArticuloOc1.codigoArticulo=(data.codigoArticulo);
      this.iArticuloOc1.detalle=(data.descripcion);
      this.iArticuloOc1.unidadDeMedida=(data.unidad);
      this.iArticuloOc1.cantidadTotal=(data.cantidadTotal);
      this.iArticuloOc1.valorUnitario=(data.valorUnitario);
      this.iArticuloOc1.montoTotal=(data.cantidadTotal +data.valorUnitario);
      this.datoConsultaOc.push(this.iArticuloOc1);
      this.iArticuloOc1 = {
        id:'',codigoArticulo: '', detalle: '',   unidadDeMedida: '', cantidadTotal: '0',  valorUnitario: '0',  montoTotal: '0'
      };
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
console.log('pp:',this.datoConsultaOc);
this.dataSource = new MatTableDataSource(this.datoConsultaOc);
   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  cerrar() {
    this.dialogRef.close();
  }

  getTotalCost() {
     return this.datoConsultaOc.map(t => parseInt(t.montoTotal)).reduce((acc, value) => acc + value, 0);
  }


  enviar(){

    let formatoDate = (moment(this.agregaArticulo.value.fechaSolicitud)).format('YYYY-MM-DD')

    this.comprasOcService
    .putDataOcCrea(this.agregaArticulo.value.numOrdenCompra, this.agregaArticulo.value.tipoDocumentoAsociado,this.agregaArticulo.value.numDocumentoAsociado,formatoDate, this.agregaArticulo.value.empresa,this.agregaArticulo.value.rut,this.agregaArticulo.value.descripcion,this.agregaArticulo.value.direccionEnvioFactura,this.agregaArticulo.value.direccionDespacho,this.agregaArticulo.value.formaPago)
    .subscribe((res: {}) => {
      console.log('oc1: ', res);
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
        this.comprasOcService
        .putDataOcCreaArticulo(this.agregaArticulo.value.numDocumentoAsociado,this.dataSource.data[valor].codigoArticulo,this.dataSource.data[valor].cantidadTotal,this.dataSource.data[valor].valorUnitario)
        .subscribe((res: {}) => {
          console.log('ot: ', res);

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
