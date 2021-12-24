import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {IArtFarm, IResultado} from 'src/app/interface/arsenal';
import { ListaArsenalService } from 'src/app/servicios/farmacia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-articulo',
  templateUrl: './agrega-articulo.component.html',
  styleUrls: ['./agrega-articulo.component.css']
})
export class AgregaArticuloComponent implements OnInit {
  
  datos: IArtFarm | undefined;
  constructor(private dialogRef: MatDialogRef<AgregaArticuloComponent>,
              public httpClient: HttpClient,
              public listaArsenalService: ListaArsenalService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    
    }

    gzen= new FormControl('', [Validators.required]);
    grupo= new FormControl('', [Validators.required]);
    subgrupo= new FormControl('', [Validators.required]);
    ctrlLegal= new FormControl('', [Validators.required]);
    tipo= new FormControl('', [Validators.required]);
    medicamento= new FormControl('', [Validators.required]);
    farmaceutica= new FormControl('', [Validators.required]);
    presentacion= new FormControl('', [Validators.required]);
    dosificacion= new FormControl('', [Validators.required]);
    restricciones= new FormControl('', [Validators.required]);
    altTerapeutica= new FormControl('', [Validators.required]);
    observaciones= new FormControl('', [Validators.required]);;
  
  public ingresoArticulo: FormGroup = new FormGroup({
    gzen: this.gzen,
    grupo: this.grupo,
    subgrupo: this.subgrupo,
    ctrlLegal: this.ctrlLegal,
    tipo: this.tipo,
    medicamento: this.medicamento,
    farmaceutica: this.farmaceutica,
    presentacion: this.presentacion,
    dosificacion: this.dosificacion, 
    restricciones: this.restricciones,
    altTerapeutica: this.altTerapeutica,
    observaciones: this.observaciones,
  });

  getErrorMessage(campo: string) {
    if (campo === 'gzen'){
      return this.gzen.hasError('required') ? 'Debe ingresar código GZEN de artículo' : '';
    }
    
    if (campo === 'grupo'){
        return this.grupo.hasError('required') ? 'Debe ingresar el grupo del artículo' : '';
    }
    if (campo === 'suggrupo'){
        return this.subgrupo.hasError('required') ? 'Debe ingresar subgrupo Artículo' : '';
    }
    if (campo === 'ctrlLegal'){
        return this.ctrlLegal.hasError('required') ? 'Debe ingresar control legal del artículo' : '';
    }
    if (campo === 'tipo'){
        return this.tipo.hasError('required') ? 'Debe ingresar el tipo de artículo' : '';
    }

    if (campo === 'medicamento'){
      return this.medicamento.hasError('required') ? 'Debe ingresar el nombre del medicamento' : '';
    }

    if (campo === 'farmaceutica'){
      return this.farmaceutica.hasError('required') ? 'Debe ingresar la farmacéutica que produce el medicamento' : '';
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
      gzen: this.ingresoArticulo.get('gzen')?.value,
      grupo: this.ingresoArticulo.get('grupo')?.value,
      subgrupo: this.ingresoArticulo.get('subgrupo')?.value,
      tipo: this.ingresoArticulo.get('tipo')?.value,
      ctrlLegal: this.ingresoArticulo.get('ctrlLegal')?.value,
      medicamento: this.ingresoArticulo.get('medicamento')?.value,
      farmaceutica: this.ingresoArticulo.get('farmaceutica')?.value,
      presentacion: this.ingresoArticulo.get('presentacon')?.value,
      dosificacion: this.ingresoArticulo.get('dosificacion')?.value,
      restricciones: this.ingresoArticulo.get('restricciones')?.value,
      altTerapeutica: this.ingresoArticulo.get('altTerapeutica')?.value,
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