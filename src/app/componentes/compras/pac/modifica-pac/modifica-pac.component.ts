import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica-pac',
  templateUrl: './modifica-pac.component.html',
  styleUrls: ['./modifica-pac.component.css']
})
export class ModificaPacComponent implements OnInit {



  constructor(private dialogRef: MatDialogRef<ModificaPacComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,

              ) {

              }








  ngOnInit() {


  }

  enviar() {



          Swal.fire(
            "Actualizado",
            'Click en Botón!',
            'info'
          );
          this.dialogRef.close(1);
        }


  // Error handling


  cerrar() {
    this.dialogRef.close();
  }

}




