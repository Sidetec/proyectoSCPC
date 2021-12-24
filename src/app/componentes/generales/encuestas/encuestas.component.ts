import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IIgresoConsumo } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {


  

  constructor(
              ) {
  }

 
  ngOnInit() {
  }

  enviar() {

            Swal.fire(
            'Se grabó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,



  }

  pantallabienvenida: boolean = true;
  pantallaencuesta: boolean = false;
  pantallacertificado: boolean = false;
  btnIniciar: boolean = false;
  btnTerminar: boolean = false;
  btnDescargar: boolean = false;
  panelOpenState:boolean = false;
  


  Iniciar() {


    this.pantallabienvenida = false;
    this.pantallaencuesta = true;
    this.btnIniciar = true;
   


/*
    Swal.fire(
    'Se grabó con Éxito',
    'Click en Botón!',
    'success'
  ); 
*/


}

Terminar() {

  this.pantallabienvenida = false;
  this.pantallaencuesta = false;
   this.btnTerminar = true;
   this.pantallacertificado = true;
   this.btnDescargar = false;
}

Descargar()
{


}

  // Error handling



  cerrar() {

  }


}
