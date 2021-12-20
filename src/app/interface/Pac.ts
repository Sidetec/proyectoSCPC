export interface IListaPac {
  pac: string;
  servicio: string;
  responsable: string;
  campo1: string;
  campo2: string;
  campo3: string;
  campo4:string;
  campo5:string;
}
export interface IConsultaPac {
  codigoArticulo: string;
  detalle: string;
  unidadDeMedida: string;
  enero: number;
  febrero: number;
  marzo: number;
  abril: number;
  mayo: number;
  junio: number;
  julio: number;
  agosto: number;
  septiembre: number;
  octubre: number;
  noviembre: number;
  diciembre: number;
  catidadTotal: number;
  valorUnitario: number;
  montoTotal: number;
  idLicitacion: number;
  idOc: number;
  totalComprado: number
  saldoLicitacion: number;
  }

  export interface IAlertas {
    fechaInicio:Date;
    fechaTermino:Date;
    primerAvisoDias:number;
    segundoAvisoDias:number;
    tercerAvisoDias:number;
    stockMinimoPorc:number;
  }

  export interface IIgresoConsumo {
  planAnual:number;
  servicio:number;
  codigoArticulo: number;
  descripcionArticulo: string;
  saldoDisponibleantesConsumo: number;
  cantidadConsumir: number;
  saldoDisponibleDespuesConsumo: number;
  }

  export interface IIngresoRecepcion {
    servicio:string;
    tipoSolicitud:string;
    codigoArt:string;
    descripcionArt:string;
    saldoDisponible:string;
    cantidad:string;
    nuevoSaldo:string;
  }
