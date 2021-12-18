import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-activo',
  templateUrl: './consulta-activo.component.html',
  styleUrls: ['./consulta-activo.component.css']
})
export class ConsultaActivoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConsultaActivoComponent>,
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
