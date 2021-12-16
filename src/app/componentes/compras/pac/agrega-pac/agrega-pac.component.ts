import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-pac',
  templateUrl: './agrega-pac.component.html',
  styleUrls: ['./agrega-pac.component.css']
})
export class AgregaPacComponent implements OnInit {




  constructor(private dialogRef: MatDialogRef<AgregaPacComponent>,

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

