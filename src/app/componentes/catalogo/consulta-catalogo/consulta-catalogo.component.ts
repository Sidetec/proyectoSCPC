
import {AfterViewInit, Component} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IngresoComponent } from '../../activo-fijo/reporte-depreciacion/ingreso/ingreso.component';
import { MantencionArchivoComponent } from '../../activo-fijo/mantencion-archivo/mantencion-archivo.component';

@Component({
  selector: 'app-consulta-catalogo',
  templateUrl: './consulta-catalogo.component.html',
  styleUrls: ['./consulta-catalogo.component.css']
})
export class ConsultaCatalogoComponent implements AfterViewInit {

displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'marca', 'modelo', 'vidaUtil', 'estado',
'campo1', 'fechaCompra', 'valorCompra', 'valorDesecho', 'depreciacionAnual','opciones'];

  constructor(public dialog: MatDialog, public httpClient: HttpClient,
    private dialogRef: MatDialogRef<ConsultaCatalogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  codigo= new FormControl(this.data.codigo, [Validators.required]);
  descripcion= new FormControl(this.data.descripcion, [Validators.required]);
  marca= new FormControl(this.data.marca, [Validators.required]);
  modelo= new FormControl(this.data.modelo, [Validators.required]);
  vidaUtil= new FormControl(this.data.vidaUtil, [Validators.required]);
  estado= new FormControl(this.data.estado, [Validators.required]);
  fechaCompra= new FormControl(this.data.fechaCompra, [Validators.required]);
  valorCompra= new FormControl(this.data.valorCompra, [Validators.required]);
  valorDesecho= new FormControl(this.data.valorDesecho, [Validators.required]);
  depreciacionAnual= new FormControl(this.data.depreciacionAnual, [Validators.required]);
  ;
  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {

  }

  cerrar() {
    this.dialogRef.close();
  }
  reporte(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(IngresoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {

                }
        }
      );
  }
  mantenimiento(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(MantencionArchivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {

                }
        }
      );

  }
}
