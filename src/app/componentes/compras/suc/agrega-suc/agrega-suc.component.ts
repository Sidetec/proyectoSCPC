import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-suc',
  templateUrl: './agrega-suc.component.html',
  styleUrls: ['./agrega-suc.component.css']
})
export class AgregasucComponent implements OnInit {




  constructor(private dialogRef: MatDialogRef<AgregasucComponent>,

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

