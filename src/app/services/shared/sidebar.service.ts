import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  // menu: any = [
  //   {
  //     titulo: 'M. Industrial',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios' },
  //       { titulo: 'Mantenimientos', url: '/mantenimientos' },
  //       { titulo: 'Maquinas', url: '/maquinas' }
  //     ]
  //   }
  //   // {
  //   //   titulo: 'Principal',
  //   //   icono: 'mdi mdi-gauge',
  //   //   submenu: [
  //   //     { titulo: 'Dashboard', url: '/dashboard' },
  //   //     { titulo: 'ProgressBar', url: '/progress' },  
  //   //     { titulo: 'Gráfiacas', url: '/graficas1' },
  //   //     { titulo: 'Promesas', url: '/promesas' },
  //   //     { titulo: 'RxJs', url: '/rxjs' }
  //   //   ]
  //   // }
  // ];

  constructor( public _usuarioService: UsuarioService ) { 
  }

  cargarMenu(){
    this.menu =  this._usuarioService.menu;
  }
}
