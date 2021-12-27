export interface IArticuloOc {
    codigoArticulo: string;
    detalle: string;
    unidadDeMedida: string;
    cantidadTotal: string;
    valorUnitario: string;
    montoTotal: string;
    }


    export interface IArticuloOcAgrega {
      id: string;
      codigoArticulo: string;
      detalle: string;
      unidadDeMedida: string;
      cantidadTotal: string;
      valorUnitario: string;
      montoTotal: string;
      }
    export interface IConsultaOcLista {
      id: string;
      cod_oc: string;
      tipoSolicitud: string;
      idSolicitud: string;
      empresa: string;
      descripcion:string;
      monto_total_neto:string;
      estado:string

    }

    export interface IDetalleOc1 {
      numeroOc:string;
      tipoDocAsoc:string;
      numDocAsoc: string;
      fechaSolicitud: string;
      empresa:string;
      rut: string;
      descripcion: string;
      dircEnvioFact: string;
      dircDespacho: string;
      formaPago: string;
    }

    export interface IOcresultado {
      resultado: string;
    }
