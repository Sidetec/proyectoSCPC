import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
/*
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './modifica-articulo/modifica-articulo.component';
import { EliminaArticuloComponent } from './elimina-articulo/elimina-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';
*/
export interface UserData {
  articulo: string;
  tempIdeal: string;
  tempActual: string;
}

/** Constants used to fill up our data base. */
const ARTICULO: string[] = [
  'FRM-001',
  'FRM-002',
  'FRM-003',
  'FRM-004',
  'FRM-005',
  'FRM-006',
  'FRM-007',
  'FRM-008',
];
const TEMPIDEAL: string[] = [
  'TempIdeal1',
  'TempIdeal2',
  'TempIdeal3',
  'TempIdeal4',
  'TempIdeal5',
  'TempIdeal6',
  'TempIdeal7',
  'TempIdeal8',
];
const TEMPACTUAL: string[] = [
  'TempActual1',
  'TempActual2',
  'TempActual3',
  'TempActual4',
  'TempActual5',
  'TempActual6',
  'TempActual7',
  'TempActual8',
];

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'articulo', 'tempIdeal', 'tempActual'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewArticulo(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
}

/** Construye y retorna un nuevo artículo. */
function createNewArticulo(id: number): UserData {
  const articulo =
    ARTICULO[Math.round(Math.random() * (ARTICULO.length - 1))] +
    ' ' +
    ARTICULO[Math.round(Math.random() * (ARTICULO.length - 1))].charAt(0) +
    '.';

  return {
    articulo: articulo,
    tempIdeal: TEMPIDEAL[Math.round(Math.random() * (TEMPIDEAL.length - 1))],
    tempActual: TEMPACTUAL[Math.round(Math.random() * (TEMPACTUAL.length - 1))],
  };
}
