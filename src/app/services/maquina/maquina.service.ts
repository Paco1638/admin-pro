import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Maquina } from 'src/app/models/maquina.model';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  maquina: Maquina;

  constructor( public http: HttpClient,
               public _usuarioService: UsuarioService,
               public router: Router,
               public _subirArchivoService: SubirArchivoService) { }

  cargarMaquinas( desde: number = 0 ){

    let url = URL_SERVICIOS + '/maquina?desde=' + desde;

    return this.http.get( url );
  }

  cargarMaquina( id: string ){

    let url = URL_SERVICIOS + '/maquina/' + id;

    return this.http.get( url )
               .pipe(map( (resp: any) => resp.maquina ));
  }

  buscarMaquinas( termino: string ){

    let url = URL_SERVICIOS + '/busqueda/coleccion/maquinas/' + termino;
    return this.http.get( url )
                    .pipe(map( (resp: any) => resp.maquinas ));
  }

  borrarMaquina( id: string ){

    let url = URL_SERVICIOS + '/maquina/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
               .pipe(map( resp => swal('Maquina Borrada', 'Maquina borrada correctamente', 'success')));
  }

  guardarMaquina( maquina: Maquina ){

    let url = URL_SERVICIOS + '/maquina';

    if ( maquina._id ){
      // Actualizando
      url += '/' + maquina._id;
      url += '?token=' + this._usuarioService.token;
      
      return this.http.put( url ,maquina )
                 .pipe(map( (resp: any) => {
                    swal('Maquina actualizada','Maquina actualizada correctamente','success');
                    return resp.maquina;
                 }));

    } else {
      // Creando

      url += '?token=' + this._usuarioService.token;
      return this.http.post( url, maquina )
      .pipe(map( (resp: any) => {
        
        swal('Maquina creada','Maquina creada correctamente','success');
        return resp.maquina;
      }));
    }
  }
}
