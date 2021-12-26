import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {



    Swal.fire(
      "Actualizado",
      'Click en Botón!',
      'info'
    );
     }


}
