import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-pac',
  templateUrl: './consulta-pac.component.html',
  styleUrls: ['./consulta-pac.component.css']
})
export class ConsultaPacComponent implements OnInit {



  constructor(private dialogRef: MatDialogRef<ConsultaPacComponent>,
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
