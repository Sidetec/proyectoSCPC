
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { IResumenDepreciacion } from 'src/app/interface/activoFijo';

@Component({
  selector: 'app-reporte-depreciacion',
  templateUrl: './reporte-depreciacion.component.html',
  styleUrls: ['./reporte-depreciacion.component.css']
})
export class ReporteDepreciacionComponent implements AfterViewInit {

datoConsultaSuc: IResumenDepreciacion[] = [

  {findeanio: '0', depreciacionAnual: '', depreciacionAcum: '', valorenLibros: '100.000'},
  {findeanio: '1', depreciacionAnual: '15.000', depreciacionAcum: '15.000', valorenLibros: '85.000'},
  {findeanio: '2', depreciacionAnual: '15.000', depreciacionAcum: '30.000', valorenLibros: '70.000'},
  {findeanio: '3', depreciacionAnual: '15.000', depreciacionAcum: '45.000', valorenLibros: '55.000'},
  {findeanio: '4', depreciacionAnual: '15.000', depreciacionAcum: '60.000', valorenLibros: '40.000'},
  {findeanio: '5', depreciacionAnual: '15.000', depreciacionAcum: '75.000', valorenLibros: '25.000'},
  {findeanio: '6', depreciacionAnual: '15.000', depreciacionAcum: '90.000', valorenLibros: '10.000'}
];

  displayedColumns: string[] = ['findeanio', 'depreciacionAnual', 'depreciacionAcum', 'valorenLibros'];
  dataSource: MatTableDataSource<IResumenDepreciacion>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ReporteDepreciacionComponent>,) {
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

