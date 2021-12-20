import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-articulo',
  templateUrl: './agrega-articulo.component.html',
  styleUrls: ['./agrega-articulo.component.css']
})
export class AgregaArticuloComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AgregaArticuloComponent>,

              ) {

    }

  ngOnInit() {
  }

  enviar() {

      Swal.fire(
        'Actualizado',
        'Click en Botón!',
        'info'
      );

    }

  cerrar() {
    this.dialogRef.close();
  }

}