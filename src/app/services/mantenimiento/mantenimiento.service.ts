import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  totalMantenimientos: number = 0;

  constructor( public http: HttpClient,
               public _usuarioService: UsuarioService ) { }

  cargarMantenimientos( desde: number = 0 ){

    let url = URL_SERVICIOS + '/mantenimiento?desde=' + desde;

    return this.http.get( url );
  }

  cargarMantenimiento( id: string ){

    let url = URL_SERVICIOS + '/mantenimiento/' + id;

    return this.http.get( url )
               .pipe(map( (resp: any) => resp.mantenimiento ));
  }

  buscarMantenimientos( termino: string ){

    let url = URL_SERVICIOS + '/busqueda/coleccion/mantenimientos/' + termino;
    return this.http.get( url )
                    .pipe(map( (resp: any) => resp.mantenimientos ));
  }

  borrarMantenimiento( id: string ){

    let url = URL_SERVICIOS + '/mantenimiento/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
               .pipe(map( resp => swal('Mantenimiento Borrado', 'Eliminado Correctamente', 'success')));
  }

  guardarMantenimiento( mantenimiento: Mantenimiento ){

    let url = URL_SERVICIOS + '/mantenimiento';

    if ( mantenimiento._id ){
      // Actualizando
      url += '/' + mantenimiento._id;
      url += '?token=' + this._usuarioService.token;
      
      return this.http.put( url ,mantenimiento )
                 .pipe(map( (resp: any) => {
                    swal('Mantenimiento actualizada','Mantenimiento actualizada correctamente','success');
                    return resp.mantenimiento;
                 }));

    } else {
      // Creando

      url += '?token=' + this._usuarioService.token;
      return this.http.post( url, mantenimiento )
      .pipe(map( (resp: any) => {
        
        swal('Mantenimiento creada','Mantenimiento creada correctamente','success');
        return resp.mantenimiento;
      }));
    }
  }
}