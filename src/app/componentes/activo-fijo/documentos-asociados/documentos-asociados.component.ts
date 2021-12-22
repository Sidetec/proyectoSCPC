import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documentos-asociados',
  templateUrl: './documentos-asociados.component.html',
  styleUrls: ['./documentos-asociados.component.css']
})
export class DocumentosAsociadosComponent implements AfterViewInit {

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<DocumentosAsociadosComponent>) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(datos);
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  cerrar() {
    this.dialogRef.close();
  }
}
