
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { IConsultaPac, IDetallePac1 } from 'src/app/interface/Pac';

import Swal from 'sweetalert2';
import { ComprasPacService } from 'src/app/servicios/compras-pac.service';

@Component({
  selector: 'app-consulta-pac',
  templateUrl: './consulta-pac.component.html',
  styleUrls: ['./consulta-pac.component.css']
})
export class ConsultaPacComponent implements AfterViewInit, OnInit {

  //datoConsultaPac:  IConsultaPac | undefined;

  iDetallePac1:IDetallePac1={
  idPac:'',
  pacAnio:'',
  servicio: ''};

  id: string='';
  /*datoConsultaPac: IConsultaPac[] = [

  {codigoArticulo: 'CCC-123', detalle: 'Detalle1',   unidadDeMedida: 'Unidad', enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6, julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12, cantidadTotal: 78,  valorUnitario: 10,  montoTotal: 80000, idLicitacion: 100,  idOc: 1000,  totalComprado: 50000,  saldoLicitacion: 30000}

  ];
*/
  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'cantidadTotal',  'valorUnitario',  'montoTotal', 'idLicitacion','idOc',  'totalComprado',  'saldoLicitacion'];
 // dataSource: MatTableDataSource<IConsultaPac>;
  dataSource: MatTableDataSource<IConsultaPac>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaPacComponent>
    ,private comprasPacService:ComprasPacService
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('datoooooooooooo', data);
      this.id = data;
    this.dataSource = new MatTableDataSource<IConsultaPac>();
  }

  ngOnInit() {

    this.getConsultaDetallePac1();
  }


  getConsultaDetallePac1() {
    console.log('paso pac', this.id)
    this.comprasPacService
    .getDataPacDetalle1(this.id)
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.iDetallePac1 = res as IDetallePac1;
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
    this.comprasPacService
    .getDataPacDetalle2(this.id)
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IConsultaPac[];

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

