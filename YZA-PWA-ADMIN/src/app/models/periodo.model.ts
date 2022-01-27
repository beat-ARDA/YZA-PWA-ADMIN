export class PeriodoItem {
    public urlDescarga: string;
    public nombreArchivo: string;
    public identificador: string;
    public tituloi: string;
    public fechai1: string;
    public fechaf1: string;
    public titulof: string;
    public fechai2: string;
    public fechaf2: string;

    constructor(
        private _urlDescarga: string,
        private _nombreArchivo: string,
        private _identificador: string,
        private _titulo1: string,
        private _fechai1: string,
        private _fechaf1: string,
        private _titulof: string,
        private _fechai2: string,
        private _fechaf2: string) {

        this.urlDescarga = _urlDescarga;
        this.nombreArchivo = _nombreArchivo;
        this.identificador = _identificador;
        this.tituloi = _titulo1;
        this.fechai1 = _fechai1;
        this.fechaf1 = _fechaf1;
        this.titulof = _titulof;
        this.fechai2 = _fechai2;
        this.fechaf2 = _fechaf2;
    }
}