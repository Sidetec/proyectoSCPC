import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './modifica-articulo/modifica-articulo.component';
import { EliminaArticuloComponent } from './elimina-articulo/elimina-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';

export interface UserData {
  articulo: string;
  cantidad: string;
  columna1: string;
  ctrlLegal: string;
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
const CANTIDAD: string[] = [
  'Cantidad1',
  'Cantidad2',
  'Cantidad3',
  'Cantidad4',
  'Cantidad5',
  'Cantidad6',
  'Cantidad7',
  'Cantidad8',
];
const CAMPO1: string[] = [
  'Campo1',
  'Campo2',
  'Campo3',
  'Campo4',
  'Campo5',
  'Campo6',
  'Campo7',
  'Campo8',
];
const ctrlLegal: string[] = [
  'S',
  'S',
  'N',
  'S',
  'N',
  'N',
  'S',
  'N',
];

@Component({
  selector: 'app-arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.css']
})
export class ArsenalComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'articulo', 'cantidad', 'columna1','ctrlLegal','opciones'];
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

    this.dialog.open(AgregaArticuloComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaArticulo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(ModificaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

  consultaArticulo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(ConsultaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

   eliminaArticulo() {
    //  agregaNuevo(empresaInterface_: EmpresaI) {
      // Nuevo
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.height = '90%';
      dialogConfig.position = { top : '2%'};
      dialogConfig.data = {};

      this.dialog.open(EliminaArticuloComponent, dialogConfig)
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
function createNewArticulo(id: number): UserData {
  const articulo =
    ARTICULO[Math.round(Math.random() * (ARTICULO.length - 1))] +
    ' ' +
    ARTICULO[Math.round(Math.random() * (ARTICULO.length - 1))].charAt(0) +
    '.';

  return {
    articulo: articulo,
    cantidad: CANTIDAD[Math.round(Math.random() * (CANTIDAD.length - 1))],
    columna1: CAMPO1[Math.round(Math.random() * (CAMPO1.length - 1))],
    ctrlLegal: ctrlLegal[Math.round(Math.random() * (CAMPO1.length - 1))],
  };
}
