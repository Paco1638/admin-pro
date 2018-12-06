import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient, public router: Router) {}

  login( usuario: Usuario, recordar: boolean = false ){

    if ( recordar ){
      localStorage.setItem( 'email', usuario.email );
    } else {
      localStorage.removeItem('email');
    }
    
    let url = URL_SERVICIOS + '/login';

    return this.http.post( url, usuario )
                    .pipe(map ((resp: any) => {

                      localStorage.setItem('id', resp.id );
                      localStorage.setItem('token', resp.token );
                      localStorage.setItem('usuario', JSON.stringify(resp.usuario));

                      return true;
                    }));
  }

  crearUsuario( usuario: Usuario ) {

    const url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
        .pipe(map((res: any) => {
         swal('Usuario Creado', usuario.email, 'success');
         return res.usuario;
 
    }));
  }
}
