export class Mantenimiento {

    constructor (
        public maquina: string,
        public pieza_danada: string,
        public pieza_reemplazada: string,
        public descripcion: string,
        public proxi_mantenimiento: string,
        public usuario?: string,
        public _id?: string
    ) { }

}
