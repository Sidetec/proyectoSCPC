export interface IArticulo{
    articulo: string;
    cantidad: number;
    descripcion: string;
    controlLegal: string;
    grupo: string;
    subGrupo: string;
    tipo: string;
    codigoGzen: string;
    medicamento: string;
    fFarmacia: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    alternativa: string;
    observaciones: string;
}

export interface IArtFarm {
 //   cantidad: number;
 //   descripcion: string;
    controlLegal: string;
    grupo: string;
    subGrupo: string;
    tipo: string;
    codigoGzen: string;
    medicamento: string;
    fFarmacia: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    alternativa: string;
    observaciones: string;
}
export interface IResultado{
    codigo: string;
}

export interface IArticuloF{
id: string;
cod_art: string;
descripcion: string;
unidad: string;
tipo: string;
estado: string;
campo1: string;
campo2: string;
campo3: string;
campo4: string;
campo5: string;
campo6: string;
campo7: string;
campo8: string;
campo9: string;
campo10: string;
esMedicamento: string;
controlLegal: string;
disponible: string;
}
