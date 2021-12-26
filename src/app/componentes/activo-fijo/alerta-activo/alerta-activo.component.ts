import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { IVidaUtil } from 'src/app/interface/alertasActivo';
import { IContrato } from 'src/app/interface/alertasActivo';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerta-activo',
  templateUrl: './alerta-activo.component.html',
  styleUrls: ['./alerta-activo.component.css']
})
export class AlertaActivoComponent implements OnInit {

  datoAlertas: IVidaUtil | undefined;
  datoContrato: IContrato | undefined;
  
  vidaUtil = new FormControl('', [Validators.required]);
  fecha= new FormControl('', [Validators.required]);
  vidaUtilRes= new FormControl('', [Validators.required]);
  generaAlerta= new FormControl('', [Validators.required]);
  inicioContrato= new FormControl('', [Validators.required]);
  terminoContrato= new FormControl('', [Validators.required]);
  tiempoRestante= new FormControl('', [Validators.required]);;

  public IVidaUtil: FormGroup = new FormGroup({
    vidaUtil: this.vidaUtil,
    fecha: this.fecha,
    vidaUtilRes: this.vidaUtilRes,
    generaAlerta: this.generaAlerta,
  });

  public IContrato: FormGroup = new FormGroup({
    inicioContrato: this.inicioContrato,
    terminoContrato: this.terminoContrato,
    tiempoRestante: this.tiempoRestante,
    generaAlerta: this.generaAlerta,
  });

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<AlertaActivoComponent>)
  {

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

            cerrar() {
              this.dialogRef.close();
            }

}
