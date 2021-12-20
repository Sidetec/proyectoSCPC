import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { IConsultaSuc } from 'src/app/interface/suc';
@Component({
  selector: 'app-consulta-occ',
  templateUrl: './consulta-oc.component.html',
  styleUrls: ['./consulta-oc.component.css']
})
export class ConsultaOcComponent implements AfterViewInit {

//datoConsultaPac:  IConsultaPac | undefined;

datoConsultaSuc: IConsultaSuc[] = [

  {codigoArticulo: 'CCC-123', detalle: 'Detalle1',   unidadDeMedida: 'Unidad', catidadTotal: 20,  valorUnitario: 100,  montoTotal: 2000, idLicitacion: 0,  idOc: 0,  totalComprado:0,  saldoSuc: 0}

  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'catidadTotal',  'valorUnitario',  'montoTotal', 'idLicitacion','idOc',  'totalComprado',  'saldoSuc'];
  dataSource: MatTableDataSource<IConsultaSuc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaOcComponent>,) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
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






  private refreshTable() {


   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  cerrar() {
    this.dialogRef.close();
  }

  }


