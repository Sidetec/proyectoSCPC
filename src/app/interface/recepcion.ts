export interface IRecepcion {
  codigoArticulo: string;
  detalle: string;
  unidadDeMedida: string;
  cantidadTotal: number;
  valorUnitario: number;
  montoTotal: number;
  idLicitacion: number;
  idOc: number;
  totalComprado: number
  saldoSuc: number;
}
export interface IServicio{
  codigo?: string;
  nombre?: string;
  descripcion?: string;
  responsable?: string;
  servicio?: string;
  correo?: string;
  nombreP?: string;
}

export interface IServicioListaP{
  codigo: string;
  nombre: string;
}
