import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
//import { AgregaPacComponent } from './agrega-pac/agrega-pac.component';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { GestionDocumentalService } from 'src/app/servicios/gestion-documental.service';
import { IGestionDocumentalLista } from 'src/app/interface/gestionDocumental';
//import { ModificaPacComponent } from './modifica-pac/modifica-pac.component';
//import { ConsultaPacComponent } from './consulta-pac/consulta-pac.component';
//import { AlertasComponent } from './alertas/alertas.component';
import Swal from 'sweetalert2';


/*
const datos: Datos[] = [

  {Documento: 'DCTO-001', Descripcion: 'Descripcion1', Icono : '', Fecha: '2021-12-25', Observaciones: 'Observacion1' },
  {Documento: 'DCTO-002', Descripcion: 'Descripcion2', Icono : '', Fecha: '2021-12-25', Observaciones: 'Observacion2' },
  {Documento: 'DCTO-003', Descripcion: 'Descripcion3', Icono : '', Fecha: '2021-12-25', Observaciones: 'Observacion3' },
  {Documento: 'DCTO-004', Descripcion: 'Descripcion4', Icono : '', Fecha: '2021-12-25', Observaciones: 'Observacion4' },
  {Documento: 'DCTO-005', Descripcion: 'Descripcion5', Icono : '', Fecha: '2021-12-25', Observaciones: 'Observacion5' }

];
*/
@Component({
  selector: 'app-gestiondocumental',
  templateUrl: './gestiondocumental.component.html',
  styleUrls: ['./gestiondocumental.component.css']
})

export class GestionDocumentalComponent implements AfterViewInit {
  displayedColumns: string[] = ['documento', 'descripcion', 'icono','fecha', 'observaciones' ];
  dataSource: MatTableDataSource<IGestionDocumentalLista>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,
    private gestionDocumentalService:GestionDocumentalService) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource<IGestionDocumentalLista>()
  }



  ngOnInit() {

    this.getListGd();
  }

  getListGd() {
    console.log('paso pac')
    this.gestionDocumentalService
    .getDataSucLista()
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IGestionDocumentalLista[];

    },
    // console.log('yo:', res as PerfilI[]),
    error => {
      console.log('error carga:', error);
      Swal.fire(
        'ERROR INESPERADO',
        error,
       'info'
     );
    }
  );
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

  consultaPac() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

/*
    this.dialog.open(ConsultaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
*/

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
