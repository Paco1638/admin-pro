export class Mantenimiento {

    constructor (
        public usuario: string,
        public maquina: string,
        public pieza_danada: string,
        public pieza_reemplazada: string,
        public descripcion: string,
        public _id?: string
    ) { }

}
