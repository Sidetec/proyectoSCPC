export interface IArticuloOc {
    codigoArticulo: string;
    detalle: string;
    unidadDeMedida: string;
    cantidadTotal: string;
    valorUnitario: string;
    montoTotal: string;
    }


    export interface IConsultaOcLista {
      id: string;
      oc: string;
      estado: string;
      tipoSolicitud: string;
      idSolicitud: string;
      empresa:string;
      descripcion:string;
      totalNeto:string

    }

    export interface IDetalleOc1 {
      oc:string;
      tipoDocumentoAsociado:string;
      numeroDocumentoAsociado: string;
      fechaSolicitud: string;
      empresa:string;
      rut: string;
      descripcion: string;
      direccionEnviaFactura: string;
      direccionDespacho: string;
      formaDePago: string;
    }
