
import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CancelarSucComponent } from '../cancelarSuc/cancelar-suc.component';

import { IConsultaSuc, IDetalleSuc1 } from 'src/app/interface/suc';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-consulta-suc',
  templateUrl: './consulta-suc.component.html',
  styleUrls: ['./consulta-suc.component.css']
})
export class ConsultasucComponent implements AfterViewInit {
  resultado=0;
  iva=964;
//datoConsultaPac:  IConsultaPac | undefined;

iDetallePac1:IDetalleSuc1={
  idSuc:'',
  estado:'',
  fechaSolicitud: '',
  servicio:'',
  responsable: '',
  motivosCompra: ''};

  servicio: string='';

datoConsultaSuc: IConsultaSuc[] = [

  {codigoArticulo: 'CCC-123', detalle: 'Detalle1',   unidadDeMedida: 'Unidad', catidadTotal: 20,  valorUnitario: 100,  montoTotal: 2000, idLicitacion: 0,  idOc: 0,  totalComprado:0,  saldoSuc: 0},
  {codigoArticulo: 'CCC-987', detalle: 'Detalle1',   unidadDeMedida: 'Litro', catidadTotal: 10,  valorUnitario: 123,  montoTotal: 1230, idLicitacion: 0,  idOc: 0,  totalComprado:0,  saldoSuc: 0},
  {codigoArticulo: 'CCC-345', detalle: 'Detalle1',   unidadDeMedida: 'Unidad', catidadTotal: 15,  valorUnitario: 123,  montoTotal: 1845, idLicitacion: 0,  idOc: 0,  totalComprado:0,  saldoSuc: 0}
  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'catidadTotal',  'valorUnitario',  'montoTotal', 'idLicitacion','idOc',  'totalComprado',  'saldoSuc'];
  dataSource: MatTableDataSource<IConsultaSuc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient
    ,private dialogRef: MatDialogRef<ConsultasucComponent>
    , private comprasSucService:ComprasSucService
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.servicio = data;
    this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
  }

  ngOnInit() {

    this.getConsultaDetallePac1();
  }


  getConsultaDetallePac1() {
    console.log('paso pac', this.servicio)
    this.comprasSucService
    .getDataSucDetalle1(this.servicio)
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.iDetallePac1 = res as IDetalleSuc1;
      this.getConsultaDetallePac2()
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


  getConsultaDetallePac2() {
    console.log('paso pac')
    this.comprasSucService
    .getDataSucDetalle2(this.servicio)
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IConsultaSuc[];

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


   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  cerrar() {
    this.dialogRef.close();
  }

  getTotalCost() {
     return this.datoConsultaSuc.map(t => t.montoTotal).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostIva() {
    return this.resultado= (this.datoConsultaSuc.map(t => t.montoTotal).reduce((acc, value) => acc + value, 0) + this.iva);
  }
  CancelarSUC(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};


    this.dialog.open(CancelarSucComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }


}

/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const pac =
    PAC[Math.round(Math.random() * (PAC.length - 1))] +
    ' ' +
    PAC[Math.round(Math.random() * (PAC.length - 1))].charAt(0) +
    '.';


  return {

    pac: pac,
    servicio: SERVICIO[Math.round(Math.random() * (SERVICIO.length - 1))],
    columna1: CAMPO1[Math.round(Math.random() * (CAMPO1.length - 1))],
    columna2: CAMPO2[Math.round(Math.random() * (CAMPO2.length - 1))],
    columna3: CAMPO3[Math.round(Math.random() * (CAMPO3.length - 1))]
  };
}

*/

