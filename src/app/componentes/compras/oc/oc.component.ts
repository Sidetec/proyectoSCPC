import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ConsultaOcComponent } from './consulta-oc/consulta-oc.component';

export interface Datos {
  oc: string;
  Columna1: string;
  Columna2: string;
  Columna3: string;

}


const datos: Datos[] = [
  {oc: 'OC-001', Columna1: 'Columna 1' , Columna2: 'Columna 1',Columna3:'Columna 1'},
  {oc: 'OC-002', Columna1: 'Columna 2' , Columna2: 'Columna 2',Columna3:'Columna 2'},
  {oc: 'OC-003', Columna1: 'Columna 3' , Columna2: 'Columna 3',Columna3:'Columna 3'},
  {oc: 'OC-004', Columna1: 'Columna 4' , Columna2: 'Columna 4',Columna3:'Columna 4'},
];

@Component({
  selector: 'app-oc',
  templateUrl: './oc.component.html',
  styleUrls: ['./oc.component.css']
})
export class OcComponent implements AfterViewInit {
  displayedColumns: string[] = ['oc', 'Columna1', 'Columna2','Columna3','opciones'];
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
  consultaoc() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};


    this.dialog.open(ConsultaOcComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

  private refreshTable() {


    this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
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