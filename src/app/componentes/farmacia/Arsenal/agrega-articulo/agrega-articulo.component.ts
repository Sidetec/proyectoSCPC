import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {IArtFarm, IResultado} from 'src/app/interface/arsenal';
import { ListaArsenalService } from 'src/app/servicios/farmacia.service';

@Component({
  selector: 'app-agrega-articulo',
  templateUrl: './agrega-articulo.component.html',
  styleUrls: ['./agrega-articulo.component.css']
})
export class AgregaArticuloComponent implements OnInit {
  
  datos: IArtFarm | undefined;
  constructor(private dialogRef: MatDialogRef<AgregaArticuloComponent>,
              public listaArsenalService: ListaArsenalService,
              @Inject(MAT_DIALOG_DATA) public data: any) {   
    }

    codigoGzen= new FormControl('', [Validators.required]);
    grupo= new FormControl('', [Validators.required]);
    subGrupo= new FormControl('', [Validators.required]);
    controlLegal= new FormControl('', [Validators.required]);
    tipo= new FormControl('', [Validators.required]);
    medicamento= new FormControl('', [Validators.required]);
    fFarmacia= new FormControl('', [Validators.required]);
    presentacion= new FormControl('', [Validators.required]);
    dosificacion= new FormControl('', [Validators.required]);
    restricciones= new FormControl('', [Validators.required]);
    alternativa= new FormControl('', [Validators.required]);
    observaciones= new FormControl('', [Validators.required]);;
  
  public ingresoArticulo: FormGroup = new FormGroup({
    codigoGzen: this.codigoGzen,
    grupo: this.grupo,
    subGrupo: this.subGrupo,
    controlLegal: this.controlLegal,
    tipo: this.tipo,
    medicamento: this.medicamento,
    fFarmacia: this.fFarmacia,
    presentacion: this.presentacion,
    dosificacion: this.dosificacion, 
    restricciones: this.restricciones,
    alternativa: this.alternativa,
    observaciones: this.observaciones,
  });

  getErrorMessage(campo: string) {
    if (campo === 'codigoGzen'){
      return this.codigoGzen.hasError('required') ? 'Debe ingresar código GZEN de artículo' : '';
    }
    
    if (campo === 'grupo'){
        return this.grupo.hasError('required') ? 'Debe ingresar el grupo del artículo' : '';
    }
    if (campo === 'sugGrupo'){
        return this.subGrupo.hasError('required') ? 'Debe ingresar subgrupo Artículo' : '';
    }
    if (campo === 'controlLegal'){
        return this.controlLegal.hasError('required') ? 'Debe ingresar control legal del artículo' : '';
    }
    if (campo === 'tipo'){
        return this.tipo.hasError('required') ? 'Debe ingresar el tipo de artículo' : '';
    }

    if (campo === 'medicamento'){
      return this.medicamento.hasError('required') ? 'Debe ingresar el nombre del medicamento' : '';
    }

    if (campo === 'fFarmacia'){
      return this.fFarmacia.hasError('required') ? 'Debe ingresar la farmacéutica que produce el medicamento' : '';
    }

    if (campo === 'presentacion'){
      return this.presentacion.hasError('required') ? 'Debe ingresar la presentación del artículo' : '';
    }

    if (campo === 'dosificacion'){
      return this.dosificacion.hasError('required') ? 'Debe ingresar dosificación del artículo' : '';
    }

    return '';
  }

  ngOnInit() {
  }

  enviar() {
    this.datos = {
      cantidad: 1,
      descripcion: this.ingresoArticulo.get('medicamento')?.value,
      codigoGzen: this.ingresoArticulo.get('codigoGzen')?.value,
      grupo: this.ingresoArticulo.get('grupo')?.value,
      subGrupo: this.ingresoArticulo.get('subGrupo')?.value,
      tipo: this.ingresoArticulo.get('tipo')?.value,
      controlLegal: this.ingresoArticulo.get('controlLegal')?.value,
      medicamento: this.ingresoArticulo.get('medicamento')?.value,
      fFarmacia: this.ingresoArticulo.get('fFarmacia')?.value,
      presentacion: this.ingresoArticulo.get('presentacon')?.value,
      dosificacion: this.ingresoArticulo.get('dosificacion')?.value,
      restricciones: this.ingresoArticulo.get('restricciones')?.value,
      alternativa: this.ingresoArticulo.get('alternativa')?.value,
      observaciones: this.ingresoArticulo.get('observaciones')?.value,
    };

    this.listaArsenalService.getInsArticulo(this.datos)
      .subscribe(res => {
        console.log('respuesta:', res['codigo']);
        if ( res['codigo'] === 0 ) {
            Swal.fire(
            'Se agregó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,
            this.dialogRef.close(1);
        }else{
          Swal.fire(
            'No se pudo agregar',
            'Click en Botón!',
            'info'
          );
          this.dialogRef.close(1);
        }
      }, error => {
        console.log('error carga:', error);
        Swal.fire(
          'ERROR INESPERADO',
          error,
         'info'
       );
      }
    );
  }

  cerrar() {
    this.dialogRef.close();
  }
}