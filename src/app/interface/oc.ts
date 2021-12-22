export interface IConsultaOc {
    codigoArticulo: string;
    detalle: string;
    unidadDeMedida: string;
    cantidadTotal: number;
    valorUnitario: number;
    montoTotal: number;
    }


    export interface IConsultaOcLista {
      id: string;
      oc: string;
      Estado: string;
      TipoSolicitud: string;
      IDsolicitud: string;
      Empresa:string;
      Descripcion:string;
      TotalNeto:string

    }
