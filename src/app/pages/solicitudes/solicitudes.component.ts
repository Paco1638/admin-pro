import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/service.index';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styles: []
})
export class SolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor( public _solicitudService: SolicitudService ) { }

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(){

    this.cargando = true;

    this._solicitudService.cargarSolicitudes( this.desde )
        .subscribe( (resp: any) => {

          this.totalRegistros = resp.total;
          this.solicitudes = resp.solicitudes;
          this.cargando = false;
        });
  }

  cambiarDesde( valor: number ){

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ){
      return;
    }

    if ( desde < 0 ){
      return;
    }

    this.desde += valor;
    this.cargarSolicitudes();
  }

  buscarSolicitud( termino: string ){

    if ( termino.length <= 0 ){
      this.cargarSolicitudes();
      return;
    }

    this._solicitudService.buscarSolicitudes( termino )
        .subscribe( solicitudes => this.solicitudes = solicitudes );
  }

  borrarSolicitud( solicitud: Solicitud ){

    this._solicitudService.borrarSolicitud( solicitud._id )
        .subscribe( () => this.cargarSolicitudes());
  }   
}
