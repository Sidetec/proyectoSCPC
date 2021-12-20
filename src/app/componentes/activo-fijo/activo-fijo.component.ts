import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ConsultaActivoFijoComponent } from './consulta-activo-fijo/consulta-activo-fijo.component';
import { ResumenInventarioComponent } from './resumen-inventario/resumen-inventario.component';

export interface Datos {
  CodigoActivo: string;
  Descripcion: string;

}


const datos: Datos[] = [
  {CodigoActivo: 'ACT-001', Descripcion: 'Descripcion1'},
  {CodigoActivo: 'ACT-002', Descripcion: 'Descripcion2'},
  {CodigoActivo: 'ACT-003', Descripcion: 'Descripcion3'},
  {CodigoActivo: 'ACT-004', Descripcion: 'Descripcion4'},
  {CodigoActivo: 'ACT-005', Descripcion: 'Descripcion5'},
 
];

@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements AfterViewInit {
  displayedColumns: string[] = ['CodigoActivo', 'Descripcion', 'columna1','opciones'];
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
  //  dialogConfig.data = {
  //    idProducto: idProdP,
  //    titulo: tituloP
  //  };


  /*

    this.dialog.open(AgregaPacComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );

    */


  }

  actualizaPac() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

/*
    this.dialog.open(ModificaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
*/

  }

  consultaActivo() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(ConsultaActivoFijoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

   }

   resumenInventario() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(ResumenInventarioComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

   }



  private refreshTable() {


   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }



  alertas(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

/*
    this.dialog.open(AlertasComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

*/

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
