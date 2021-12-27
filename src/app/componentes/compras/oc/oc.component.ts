import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ConsultaOcComponent } from './consulta-oc/consulta-oc.component';
import { AgregaOcComponent } from './agrega-oc/agrega-oc.component';
import { IConsultaOcLista } from 'src/app/interface/oc';
import { ComprasOcService } from 'src/app/servicios/compras-oc.service';

import Swal from 'sweetalert2';

/*const datos: Datos[] = [
  {id:'1',oc: 'OC-001', Estado: '' , TipoSolicitud: 'PAC',IDsolicitud:'PAC-218721',Empresa:'',Descripcion:'',TotalNeto:''},
  {id:'2',oc: 'OC-002', Estado: '' , TipoSolicitud: 'PAC',IDsolicitud:'PAC-3217Y6',Empresa:'',Descripcion:'',TotalNeto:''},
  {id:'3',oc: 'OC-003', Estado: '' , TipoSolicitud: 'SUC',IDsolicitud:'SUC-3127TY',Empresa:'',Descripcion:'',TotalNeto:''},
];
*/
@Component({
  selector: 'app-oc',
  templateUrl: './oc.component.html',
  styleUrls: ['./oc.component.css']
})
export class OcComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','oc', 'Estado', 'TipoSolicitud','IDsolicitud','Empresa','Descripcion','TotalNeto','opciones'];
  dataSource: MatTableDataSource<IConsultaOcLista>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  show=true;
  constructor(public dialog: MatDialog,public httpClient: HttpClient,private comprasOcService:ComprasOcService) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<IConsultaOcLista>()
  }

  ngOnInit() {

    this.getListOc();
  }

  getListOc() {
    console.log('paso pac')
    this.comprasOcService
    .getDataOcLista()
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IConsultaOcLista[];

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
  consultaoc(id:string, tipoSolicitud:string) {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};
console.log('consulta id',id)

    dialogConfig.data = { id: id, tipoSolicitud: tipoSolicitud };
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

    this.getListOc();
    this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
   }

   agregaNuevo(){
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

    this.dialog.open(AgregaOcComponent, dialogConfig)
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
