import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-activo',
  templateUrl: './agrega-activo.component.html',
  styleUrls: ['./agrega-activo.component.css']
})
export class AgregaActivoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AgregaActivoComponent>,

              ) {

    }

    //idstatus: number; // 1,

  ngOnInit() {
  }

  enviar() {

      Swal.fire(
        'Actualizado',
        'Click en Botón!',
        'info'
      );

    }

  // Error handling

  cerrar() {
    this.dialogRef.close();
  }

}