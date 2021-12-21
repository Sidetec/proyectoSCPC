import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';



export interface Datos {
  numero: string;
  tipo: string;
  estado:string;
  fecha:string;
  fecha2:string;
  responsable:string;

}

const datos: Datos[] = [
  {numero: 'MANT-001', tipo: 'Mantencion Preventiva',estado:'Ejecutada',fecha:'',fecha2:'',responsable:''},
  {numero: 'MANT-002', tipo: 'Mantencion Preventiva',estado:'Ejecutada',fecha:'',fecha2:'',responsable:''},
  {numero: 'MANT-003', tipo: 'Mantencion Preventiva',estado:'Ejecutada',fecha:'',fecha2:'',responsable:''},
  {numero: 'MANT-004', tipo: 'Mantencion Preventiva',estado:'Ejecutada',fecha:'',fecha2:'',responsable:''},
  {numero: 'MANT-005', tipo: 'Mantencion Preventiva',estado:'En Proceso',fecha:'',fecha2:'',responsable:''},

]


@Component({
  selector: 'app-mantencion-archivo',
  templateUrl: './mantencion-archivo.component.html',
  styleUrls: ['./mantencion-archivo.component.css']
})

export class MantencionArchivoComponent implements AfterViewInit {

  displayedColumns: string[] = ['numero', 'tipo', 'estado','fecha','fecha2','responsable'];
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

  consultaPac() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};


   /* this.dialog.open(ConsultaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );*/
   }


  private refreshTable() {


   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }


}
