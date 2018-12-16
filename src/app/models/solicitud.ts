export class Solicitud {

    constructor(
        public nombre_maquina: string,
        public tipo_solicitud: string,
        public ambiente_solicitud: string,
        public fecha_solicitud: string,
        public usuario?: string,
        public _id?: string
    ) { }
}
