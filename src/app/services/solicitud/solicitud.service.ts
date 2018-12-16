import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Solicitud } from 'src/app/models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  totalSolicitudes: number = 0;

  constructor( public http: HttpClient,
               public _usuarioService: UsuarioService ) { }

  cargarSolicitudes( desde: number = 0 ){

    let url = URL_SERVICIOS + '/solicitud?desde=' + desde;

    return this.http.get( url );
  }

  cargarSolicitud( id: string ){

    let url = URL_SERVICIOS + '/solicitud/' + id;

    return this.http.get( url )
               .pipe(map( (resp: any) => resp.solicitud ));
  }

  buscarSolicitudes( termino: string ){

    let url = URL_SERVICIOS + '/busqueda/coleccion/solicitudes/' + termino;
    return this.http.get( url )
                    .pipe(map( (resp: any) => resp.solicitudes ));
  }

  borrarSolicitud( id: string ){

    let url = URL_SERVICIOS + '/solicitud/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
               .pipe(map( resp => swal('Solicitud Borrada', 'Eliminada Correctamente', 'success')));
  }

  guardarSolicitud( solicitud: Solicitud ){

    let url = URL_SERVICIOS + '/solicitud';

    if ( solicitud._id ){
      // Actualizando
      url += '/' + solicitud._id;
      url += '?token=' + this._usuarioService.token;
      
      return this.http.put( url ,solicitud )
                 .pipe(map( (resp: any) => {
                    swal('Solicitud actualizada','Solicitud actualizada correctamente','success');
                    return resp.solicitud;
                 }));

    } else {
      // Creando

      url += '?token=' + this._usuarioService.token;
      return this.http.post( url, solicitud )
      .pipe(map( (resp: any) => {
        
        swal('Solicitud creada','Solicitud creada correctamente','success');
        return resp.solicitud;
      }));
    }
  }
}