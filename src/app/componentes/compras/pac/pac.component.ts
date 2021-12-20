import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AgregaPacComponent } from './agrega-pac/agrega-pac.component';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ModificaPacComponent } from './modifica-pac/modifica-pac.component';
import { ConsultaPacComponent } from './consulta-pac/consulta-pac.component';
import { AlertasComponent } from './alertas/alertas.component';
import { IListaPac } from 'src/app/interface/Pac';

import Swal from 'sweetalert2';
import { ComprasPacService } from 'src/app/servicios/compras-pac.service';




@Component({
  selector: 'app-pac',
  templateUrl: './pac.component.html',
  styleUrls: ['./pac.component.css']
})
export class PacComponent implements AfterViewInit, OnInit {

 /* datos: IListaPac[] = [
    {pac: 'PAC-001', servicio: 'Servicio1'},
    {pac: 'PAC-002', servicio: 'Servicio2'},
    {pac: 'PAC-003', servicio: 'Servicio3'},
    {pac: 'PAC-004', servicio: 'Servicio4'},
    {pac: 'PAC-005', servicio: 'Servicio5'},
    {pac: 'PAC-006', servicio: 'Servicio6'},
    {pac: 'PAC-007', servicio: 'Servicio7'},
    {pac: 'PAC-008', servicio: 'Servicio8'},
    {pac: 'PAC-009', servicio: 'Servicio9'},
    {pac: 'PAC-0010', servicio: 'Servicio10'},
    {pac: 'PAC-0011', servicio: 'Servicio11'},
    {pac: 'PAC-0012', servicio: 'Servicio12'},
    {pac: 'PAC-0013', servicio: 'Servicio13'},
    {pac: 'PAC-0014', servicio: 'Servicio14'},
    {pac: 'PAC-0015', servicio: 'Servicio15'},
    {pac: 'PAC-0016', servicio: 'Servicio16'},
    {pac: 'PAC-0017', servicio: 'Servicio17'},
    {pac: 'PAC-0018', servicio: 'Servicio18'},
    {pac: 'PAC-0019', servicio: 'Servicio19'},
    {pac: 'PAC-0020', servicio: 'Servicio20'},
  ];
  */
  displayedColumns: string[] = ['pac', 'servicio', 'columna1','opciones'];
  dataSource: MatTableDataSource<IListaPac>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private comprasPacService:ComprasPacService) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource<IListaPac>();
  }


  ngOnInit() {

    this.getListPac();
  }

  getListPac() {
    console.log('paso pac')
    this.comprasPacService
    .getDataPacLista()
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IListaPac[];

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


    this.dialog.open(AgregaPacComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaPac() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};


    this.dialog.open(ModificaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

  consultaPac() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};


    this.dialog.open(ConsultaPacComponent, dialogConfig)
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


    this.dialog.open(AlertasComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
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
