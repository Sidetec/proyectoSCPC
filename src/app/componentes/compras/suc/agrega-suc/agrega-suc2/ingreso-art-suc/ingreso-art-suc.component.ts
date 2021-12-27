import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';import { IArticulo, IdatoArticulo } from 'src/app/interface/suc';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';
;


import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-art-suc',
  templateUrl: './ingreso-art-suc.component.html',
  styleUrls: ['./ingreso-art-suc.component.css']
})
export class IngresoArtSucComponent implements OnInit {
  descripcion:string='' as string;
  uidadMedida:string='' as string;
  id:string='' as string;
  codigoArticuloP='' as string;
  datosArticulo:IArticulo[]=[];
  /* {

    id:'',
    cod_art:'',
    descripcion:'',
    unidad:'',
    tipo:'',
    estado:'',
    esMedicamento:'',
    controlLegal:'',
    saldo_disponible:''
  };
*/
datoArticulo: IdatoArticulo = {
    id:'',
    codigoArticulo: '',
    descripcion:'',
    unidad:'',
    cantidadTotal: '',
    valorUnitario: ''
  }

  constructor(private dialogRef: MatDialogRef<IngresoArtSucComponent>
    , private comprasSucService:ComprasSucService) { }

  codigoArticulo = new FormControl('', [Validators.required]);
  cantidadTotal = new FormControl('', [Validators.required]);
  valorUnitario = new FormControl('', [Validators.required]);

  //idstatus: number; // 1,


  public ingresaArticulo: FormGroup = new FormGroup({
    codigoArticulo: this.codigoArticulo,
    cantidadTotal: this.cantidadTotal,
    valorUnitario: this.valorUnitario,


    // address: this.addressFormControl
  });

  getErrorMessage(campo: string) {
    if (campo === 'codigoArticulo'){
      return this.codigoArticulo.hasError('required') ? 'Debes ingresar Código Artículo' : '';
  }
    if (campo === 'cantidadTotal'){
        return this.cantidadTotal.hasError('required') ? 'Debes ingresar Cantidad' : '';
    }
    if (campo === 'valorUnitario'){
        return this.valorUnitario.hasError('required') ? 'Debes ingresar Valor Unitario'  : '';
    }

    return '';
  }

  ngOnInit(): void {
  }

  enviar(){
    this.datoArticulo = {
      id:this.id,
      codigoArticulo: this.codigoArticuloP ,
      descripcion: this.descripcion ,
      unidad: this.uidadMedida ,
      cantidadTotal: this.ingresaArticulo.get('cantidadTotal')!.value,
      valorUnitario: this.ingresaArticulo.get('valorUnitario')!.value,
    };
    console.log('envio articulo:',this.datoArticulo);
    this.dialogRef.close(this.datoArticulo);
  }


  cerrar() {
    this.dialogRef.close();
  }


  onBlurArticulo(event: any){
    let codArticulo= event.target.value;
    this.comprasSucService
    .getBuscaArticulo(codArticulo)
    .subscribe((res: {}) => {
      console.log('articulo: ', res);
      if (res==''){
        this.descripcion='';
        this.uidadMedida='';
        this.id='';
        this.codigoArticuloP='';
        this.ingresaArticulo.get('codigoArticulo')!.setValue('');
        Swal.fire(
          'ERROR ARTICULO',
          'Artículo no Existe',
         'info'
       );

      }
      else{
        this.datosArticulo = res as IArticulo[];
        this.codigoArticuloP= this.datosArticulo[0].cod_art;
        this.descripcion=this.datosArticulo[0].descripcion;
        this.uidadMedida=this.datosArticulo[0].unidad;
        this.id=this.datosArticulo[0].id;
      }
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

}
