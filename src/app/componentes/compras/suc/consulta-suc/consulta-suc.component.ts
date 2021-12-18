
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CancelarSucComponent } from '../cancelarSuc/cancelar-suc.component';

import { IConsultaSuc } from 'src/app/interface/suc';
@Component({
  selector: 'app-consulta-suc',
  templateUrl: './consulta-suc.component.html',
  styleUrls: ['./consulta-suc.component.css']
})
export class ConsultasucComponent implements AfterViewInit {

//datoConsultaPac:  IConsultaPac | undefined;

datoConsultaSuc: IConsultaSuc[] = [

  {codigoArticulo: 'CCC-123', detalle: 'Detalle1',   unidadDeMedida: 'Unidad', catidadTotal: 20,  valorUnitario: 100,  montoTotal: 2000, idLicitacion: 0,  idOc: 0,  totalComprado:0,  saldoSuc: 0}

  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'catidadTotal',  'valorUnitario',  'montoTotal', 'idLicitacion','idOc',  'totalComprado',  'saldoSuc'];
  dataSource: MatTableDataSource<IConsultaSuc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultasucComponent>,) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
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

