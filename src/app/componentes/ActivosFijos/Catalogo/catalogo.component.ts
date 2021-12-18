import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregaActivoComponent } from './agrega-activo/agrega-activo.component';
import { ModificaActivoComponent } from './modifica-activo/modifica-activo.component';
import { EliminaActivoComponent } from './elimina-activo/elimina-activo.component';
import { ConsultaActivoComponent } from './consulta-activo/consulta-activo.component';

export interface UserData {
    activo: string;
    descripcion: string;
    columna1: string;
    columna2: string;
}

/** Constants used to fill up our data base. */
const ACTIVO: string[] = [
  'ACT-001',
  'ACT-002',
  'ACT-003',
  'ACT-004',
  'ACT-005',
  'ACT-006',
  'ACT-007',
  'ACT-008',
];
const DESCRIPCION: string[] = [
  'Descripcion1',
  'Descripcion2',
  'Descripcion3',
  'Descripcion4',
  'Descripcion5',
  'Descripcion6',
  'Descripcion7',
  'Descripcion',
];
const COLUMNA1: string[] = [
  'Activo1',
  'Activo2',
  'Activo3',
  'Activo4',
  'Activo5',
  'Activo6',
  'Activo7',
  'Activo8',
];
const COLUMNA2: string[] = [
  'Dato1',
  'Dato2',
  'Dato3',
  'Dato4',
  'Dato5',
  'Dato6',
  'Dato7',
  'Dato8',
];

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'activo', 'descricion', 'columna1','columna2','opciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewActivo(k + 1));

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

  agregaNuevo() {
  //  agregaNuevo(empresaInterface_: EmpresaI) {
    // Nuevo
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '2%'};
    dialogConfig.data = {};

    this.dialog.open(AgregaActivoComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaActivo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(ModificaActivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

  consultaActivo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(ConsultaActivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

   eliminaActivo() {
    //  agregaNuevo(empresaInterface_: EmpresaI) {
      // Nuevo
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.height = '90%';
      dialogConfig.position = { top : '2%'};
      dialogConfig.data = {};
  
      this.dialog.open(EliminaActivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
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

/** Construye y retorna un nuevo artículo. */
function createNewActivo(id: number): UserData {
  const articulo =
    ACTIVO[Math.round(Math.random() * (ACTIVO.length - 1))] +
    ' ' +
    ACTIVO[Math.round(Math.random() * (ACTIVO.length - 1))].charAt(0) +
    '.';

  return {
    activo: activo,
    descripcion: DESCRIPCION[Math.round(Math.random() * (DESCRIPCION.length - 1))],
    columna1: COLUMNA1[Math.round(Math.random() * (COLUMNA1.length - 1))],
    columna2: COLUMNA2[Math.round(Math.random() * (COLUMNA2.length - 1))],
  };
}
