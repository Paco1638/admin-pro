import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService ){}

  canActivate() {
    if ( this._usuarioService.usuario.role === 'ADMIN_ROLE' ){
      return true;
    } else {
      console.log( 'Bloqueado por el ADMIN GUARD' );
      this._usuarioService.logout();
      return false;
    }
  }
}
