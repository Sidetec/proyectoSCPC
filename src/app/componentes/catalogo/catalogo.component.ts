import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { ICatalogo } from 'src/app/interface/catalogo';
import Swal from 'sweetalert2';
import { CatalogoService } from 'src/app/servicios/catalogo.service';
import { ConsultaCatalogoComponent } from './consulta-catalogo/consulta-catalogo.component';
import { BalanceGeneralComponent } from '../activo-fijo/balance-general/balance-general.component';
import { ResumenInventarioComponent } from '../activo-fijo/resumen-inventario/resumen-inventario.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements AfterViewInit {
  show = true;
  datos: ICatalogo | undefined;

  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'marca', 'modelo', 'vidaUtil', 'estado',
    'campo1', 'fechaCompra', 'valorCompra', 'valorDesecho', 'depreciacionAnual','opciones'];
  dataSource: MatTableDataSource<ICatalogo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(  private catalogoService: CatalogoService,
                public dialog: MatDialog,
                public httpClient: HttpClient,) {

    this.dataSource = new MatTableDataSource<ICatalogo>();
  }

ngOnInit() {
  this.getListCatalogo();
}

getListCatalogo(): void {
  this.catalogoService
    .getDataCatalogoLista()
    .subscribe((res: {}) => {
      console.log('Catálogos: ', res);
      this.dataSource.data = res as ICatalogo[];
    },
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

  consultaCatalogo(id: string, codigo: string, descripcion: string, marca: string, modelo: string,
    vidaUtil: string, estado: string, campo1: string, fechaCompra: string, valorCompra: string,
    valorDesecho: string, depreciacionAnual: string) {

    this.datos = {
        id, codigo, descripcion, marca, modelo, vidaUtil, estado,
        campo1, fechaCompra, valorCompra, valorDesecho, depreciacionAnual
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    dialogConfig.data = this.datos;
    this.dialog.open(ConsultaCatalogoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }
    balanceGral(){
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '90%';
      dialogConfig.position = { top : '1%'};

      this.dialog.open(BalanceGeneralComponent, dialogConfig)
        .afterClosed().subscribe(
         data => {console.log('Datoas Consulta:', data);
                  if (data !== undefined) {

                  }
          }
        );

     }





    resumen(){
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
    this.getListCatalogo();
   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }
}
