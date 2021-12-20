import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './modifica-articulo/modifica-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';
import { EliminaArticuloComponent } from './elimina-articulo/elimina-articulo.component';

export interface Datos {
  articulo: string;
  cantidad: string;
  descripcion: string;
}

const datos: Datos[] = [
  {articulo: 'ART-001', cantidad: 'Cantidad1', descripcion: 'Descripción01'},
  {articulo: 'ART-002', cantidad: 'Cantidad2', descripcion: 'Descripción02'},
  {articulo: 'ART-003', cantidad: 'Cantidad3', descripcion: 'Descripción03'},
  {articulo: 'ART-004', cantidad: 'Cantidad4', descripcion: 'Descripción04'},
  {articulo: 'ART-005', cantidad: 'Cantidad5', descripcion: 'Descripción05'},
  {articulo: 'ART-006', cantidad: 'Cantidad6', descripcion: 'Descripción06'},
  {articulo: 'ART-007', cantidad: 'Cantidad7', descripcion: 'Descripción07'},
  {articulo: 'ART-008', cantidad: 'Cantidad8', descripcion: 'Descripción08'},
  {articulo: 'ART-009', cantidad: 'Cantidad9', descripcion: 'Descripción09'},
  {articulo: 'ART-0010', cantidad: 'Cantidad10', descripcion: 'Descripción10'},
  {articulo: 'ART-0011', cantidad: 'Cantidad11', descripcion: 'Descripción11'},
  {articulo: 'ART-0012', cantidad: 'Cantidad12', descripcion: 'Descripción12'},
  {articulo: 'ART-0013', cantidad: 'Cantidad13', descripcion: 'Descripción13'},
  {articulo: 'ART-0014', cantidad: 'Cantidad14', descripcion: 'Descripción14'},
  {articulo: 'ART-0015', cantidad: 'Cantidad15', descripcion: 'Descripción15'},
  {articulo: 'ART-0016', cantidad: 'Cantidad16', descripcion: 'Descripción16'},
  {articulo: 'ART-0017', cantidad: 'Cantidad17', descripcion: 'Descripción17'},
  {articulo: 'ART-0018', cantidad: 'Cantidad18', descripcion: 'Descripción18'},
  {articulo: 'ART-0019', cantidad: 'Cantidad19', descripcion: 'Descripción19'},
  {articulo: 'ART-0020', cantidad: 'Cantidad20', descripcion: 'Descripción20'},
];

@Component({
  selector: 'app-Arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.css']
})
export class ArsenalComponent implements AfterViewInit {
  displayedColumns: string[] = ['articulo', 'cantidad', 'descripcion','opciones'];
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

    this.dialog.open(AgregaArticuloComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datos agregados:', data);
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
       data => {console.log('Datos modificados:', data);
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
    dialogConfig.width = '100%';
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

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(EliminaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos eliminados:', data);
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