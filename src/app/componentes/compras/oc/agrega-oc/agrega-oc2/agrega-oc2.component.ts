import {AfterViewInit, Component, Inject, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticuloOc } from 'src/app/interface/oc';
import { ComprasOcService } from 'src/app/servicios/compras-oc.service';

@Component({
  selector: 'app-agrega-oc2',
  templateUrl: './agrega-oc2.component.html',
  styleUrls: ['./agrega-oc2.component.css']
})
export class AgregaOc2Component implements AfterViewInit {
  @Input()
  agregaArticulo!: FormGroup;

  resultado=0;
  iva=964;
//datoConsultaPac:  IConsultaPac | undefined;

iArticuloOc1:IArticuloOc = {
  codigoArticulo: '', detalle: '',   unidadDeMedida: '', cantidadTotal: '0',  valorUnitario: '0',  montoTotal: '0'
};

  id: string='';


datoConsultaOc: IArticuloOc[] = [


  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'cantidadTotal',  'valorUnitario',  'montoTotal','opciones'];
  dataSource: MatTableDataSource<IArticuloSuc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient
    ,private dialogRef: MatDialogRef<AgregaOc2Component>,
    ,private comprasOcService:ComprasOcService

    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.id = data;
    this.dataSource = new MatTableDataSource<IArticuloSuc>();
    ;
  }

  ngOnInit() {

    console.log('arreglo anterior',this.agregaArticulo.value.fechaSolicitud);
  }

  eliminaArticulo(i:any){
  this.datoConsultaOc.splice(i,1);
    console.log('todo:',this.datoConsultaOc);
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
     this.iArticuloOc1.codigoArticulo=((document.getElementById("codigoArticulo") as HTMLInputElement).value);
      this.iArticuloOc1.detalle=((document.getElementById("detalle") as HTMLInputElement).value);
      this.iArticuloOc1.unidadDeMedida=((document.getElementById("unidadDeMedida") as HTMLInputElement).value);
      this.iArticuloOc1.cantidadTotal=((document.getElementById("cantidadTotal") as HTMLInputElement).value);
      this.iArticuloOc1.valorUnitario=((document.getElementById("valorUnitario") as HTMLInputElement).value);
      this.datoConsultaOc.push(this.iArticuloOc1);
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

  getTotalCostIva() {
    return this.resultado= (this.datoConsultaOc.map(t => parseInt(t.montoTotal)).reduce((acc, value) => acc + value, 0) + this.iva);
  }

  enviar(){

    this.comprasOcService
    .putDataOcCrea('5',this.agregaArticulo.value.fechaSolicitud,this.agregaArticulo.value.servicio,this.agregaArticulo.value.responsable,this.agregaArticulo.value.motivoCompra)
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

          this.comprasOcService
        .putDataOcCreaArticulo('10',this.dataSource.data[valor].codigoArticulo,this.dataSource.data[valor].detalle,this.dataSource.data[valor].unidadDeMedida,this.dataSource.data[valor].cantidadTotal,this.dataSource.data[valor].valorUnitario,this.dataSource.data[valor].montoTotal)
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
