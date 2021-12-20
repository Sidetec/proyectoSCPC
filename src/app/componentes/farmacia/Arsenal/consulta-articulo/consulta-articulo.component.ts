import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-articulo',
  templateUrl: './consulta-articulo.component.html',
  styleUrls: ['./consulta-articulo.component.css']
})
export class ConsultaArticuloComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConsultaArticuloComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {
                console.log('data conte: ', data)

              }

  ngOnInit() {

  }

  cerrar() {
    this.dialogRef.close();
  }

}
