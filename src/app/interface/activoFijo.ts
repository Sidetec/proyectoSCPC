export interface IConsultaActivoFijo {
    codigo:string;
    marca:string;
    modelo:string;
    descripcion:string;
    vidaUtil:string;
    }

    export interface IResumenDepreciacion {
        findeanio:string;
        depreciacionAnual:string;
        depreciacionAcum:string;
        valorenLibros:string;
        }