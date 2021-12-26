import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export interface Datos {
  tipoEspecie:string;
  cuenta:string;
  codigo: string;
  descripcion: string;
  marca:string;
  modelo:string;
  vidaUtil:string;
  valorLibro:string;
  valorDesecho:string;
  depreciacionAnual:string;
  depreciacionAcumulada:string;

}

const datos: Datos[] = [
  {tipoEspecie:'',cuenta:'',codigo: '', descripcion: ' ',marca:'',modelo:'',vidaUtil:'',valorLibro:'',valorDesecho:'',depreciacionAnual:'',depreciacionAcumulada:''},
]

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrls: ['./balance-general.component.css']
})
export class BalanceGeneralComponent implements AfterViewInit {

  displayedColumns: string[] = ['tipoEspecie','cuenta','codigo', 'descripcion', 'marca','modelo','vidaUtil','valorLibro','valorDesecho','depreciacionAnual','depreciacionAcumulada'];
  dataSource: MatTableDataSource<Datos>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<BalanceGeneralComponent>) {
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

  
  cerrar() {
    this.dialogRef.close();
  }


}
