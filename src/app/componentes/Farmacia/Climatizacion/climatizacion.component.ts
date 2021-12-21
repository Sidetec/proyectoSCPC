import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export interface Datos {
  articulo: string;
  tempIdeal: string;
  tempActual: string;
}

const datos: Datos[] = [
  {articulo: 'FRM-001', tempIdeal: 'TempIdeal1', tempActual: 'TempActual01'},
  {articulo: 'FRM-002', tempIdeal: 'TempIdeal2', tempActual: 'TempActual02'},
  {articulo: 'FRM-003', tempIdeal: 'TempIdeal3', tempActual: 'TempActual03'},
  {articulo: 'FRM-004', tempIdeal: 'TempIdeal4', tempActual: 'TempActual04'},
  {articulo: 'FRM-005', tempIdeal: 'TempIdeal5', tempActual: 'TempActual05'},
  {articulo: 'FRM-006', tempIdeal: 'TempIdeal6', tempActual: 'TempActual06'},
  {articulo: 'FRM-007', tempIdeal: 'TempIdeal7', tempActual: 'TempActual07'},
  {articulo: 'FRM-008', tempIdeal: 'TempIdeal8', tempActual: 'TempActual08'},
  {articulo: 'FRM-009', tempIdeal: 'TempIdeal9', tempActual: 'TempActual09'},
  {articulo: 'FRM-0010', tempIdeal: 'TempIdeal10', tempActual: 'TempActual10'},
  {articulo: 'FRM-0011', tempIdeal: 'TempIdeal11', tempActual: 'TempActual11'},
  {articulo: 'FRM-0012', tempIdeal: 'TempIdeal12', tempActual: 'TempActual12'},
  {articulo: 'FRM-0013', tempIdeal: 'TempIdeal13', tempActual: 'TempActual13'},
  {articulo: 'FRM-0014', tempIdeal: 'TempIdeal14', tempActual: 'TempActual14'},
  {articulo: 'FRM-0015', tempIdeal: 'TempIdeal15', tempActual: 'TempActual15'},
  {articulo: 'FRM-0016', tempIdeal: 'TempIdeal16', tempActual: 'TempActual16'},
  {articulo: 'FRM-0017', tempIdeal: 'TempIdeal17', tempActual: 'TempActual17'},
  {articulo: 'FRM-0018', tempIdeal: 'TempIdeal18', tempActual: 'TempActual18'},
  {articulo: 'FRM-0019', tempIdeal: 'TempIdeal19', tempActual: 'TempActual19'},
  {articulo: 'FRM-0020', tempIdeal: 'TempIdeal20', tempActual: 'TempActual20'},
];

@Component({
  selector: 'app-Climatizacion',
  templateUrl: './climatizacion.component.html',
  styleUrls: ['./climatizacion.component.css']
})
export class ClimatizacionComponent implements AfterViewInit {
  displayedColumns: string[] = ['articulo', 'tempIdeal', 'tempActual'];
  dataSource: MatTableDataSource<Datos>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(datos);
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