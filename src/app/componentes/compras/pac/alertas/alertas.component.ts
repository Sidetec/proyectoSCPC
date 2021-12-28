import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlertas } from 'src/app/interface/Pac';
import { ComprasPacService } from 'src/app/servicios/compras-pac.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {



  datoAlertas: IAlertas = {
    fechaInicio: '',
    fechaTermino: '',
    vencPrimerAviso: '',
    vencSegundoAviso: '',
    vencTercerAviso: '',
    controlStock: ''
  }

  constructor(private dialogRef: MatDialogRef<AlertasComponent>,
    private comprasPacService:ComprasPacService
              ) {
                this.getAlerta();
              }


  fechaInicio = new FormControl(this.datoAlertas.fechaInicio, [Validators.required]);
  fechaTermino= new FormControl(this.datoAlertas.fechaTermino, [Validators.required]);
  primerAvisoDias= new FormControl(this.datoAlertas.vencPrimerAviso, [Validators.required]);
  segundoAvisoDias= new FormControl(this.datoAlertas.vencSegundoAviso, [Validators.required]);
  tercerAvisoDias= new FormControl(this.datoAlertas.vencTercerAviso, [Validators.required]);
  stockMinimoPorc= new FormControl(this.datoAlertas.controlStock, [Validators.required]);

  public configuraAlerta: FormGroup = new FormGroup({
    fechaInicio: this.fechaInicio,
    fechaTermino: this.fechaTermino,
    primerAvisoDias: this.primerAvisoDias,
    segundoAvisoDias: this.segundoAvisoDias,
    tercerAvisoDias: this.tercerAvisoDias,
    stockMinimoPorc: this.stockMinimoPorc,
  });

  getErrorMessage(campo: string) {

    if (campo === 'fechaInicio'){
        return this.fechaInicio.hasError('required') ? 'Debes ingresar Fecha Inicio' : '';
    }
    if (campo === 'fechaTermino'){
        return this.fechaTermino.hasError('required') ? 'Debes ingresar Fecha Término' : '';
    }
    if (campo === 'primerAvisoDias'){
        return this.primerAvisoDias.hasError('required') ? 'Debes ingresar Primer Aviso' : '';
    }
    if (campo === 'segundoAvisoDias'){
        return this.segundoAvisoDias.hasError('required') ? 'Debes ingresar Segundo Aviso' : '';
    }
    if (campo === 'tercerAvisoDias'){
        return this.tercerAvisoDias.hasError('required') ? 'Debes ingresar Tercer Aviso' : '';
    }
    if (campo === 'stockMinimoPorc'){
        return this.stockMinimoPorc.hasError('required') ? 'Debes ingresar Stock Mínimo' : '';
    }

    return '';
  }

  ngOnInit() {

  }

getAlerta() {
    console.log('paso pac')
    this.comprasPacService
    .getAlerta()
    .subscribe((res: {}) => {

      this.datoAlertas=res as IAlertas;
      console.log('alertas: ', this.datoAlertas);


      this.configuraAlerta.get('fechaInicio')!.setValue(this.datoAlertas.fechaInicio);
      this.configuraAlerta.get('fechaTermino')!.setValue(this.datoAlertas.fechaTermino);
      this.configuraAlerta.get('primerAvisoDias')!.setValue(this.datoAlertas.vencPrimerAviso);
      this.configuraAlerta.get('segundoAvisoDias')!.setValue(this.datoAlertas.vencSegundoAviso);
      this.configuraAlerta.get('tercerAvisoDias')!.setValue(this.datoAlertas.vencTercerAviso);
      this.configuraAlerta.get('stockMinimoPorc')!.setValue(this.datoAlertas.controlStock);

    },
    // console.log('yo:', res as PerfilI[]),
    error => {
      console.log('error carga:', error);
      Swal.fire(
        'ERROR INESPERADO',
        error,
       'info'
     );
    }
  );
  }
  enviar() {

            Swal.fire(
            'Se grabó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,
            this.dialogRef.close(1);


  }

  // Error handling



  cerrar() {
    this.dialogRef.close();
  }
}

