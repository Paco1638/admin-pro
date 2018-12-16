import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { Maquina } from 'src/app/models/maquina.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  mantenimientos: Mantenimiento[] = [];
  maquinas: Maquina[] = [];

  constructor( public activateRoute: ActivatedRoute,
               public http: HttpClient ) {

    activateRoute.params
      .subscribe( params => {
        let termino = params['termino'];
        this.buscar( termino );
      });
   }

  ngOnInit() {
  }

  buscar( termino: string ){

    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;

    this.http.get( url )
        .subscribe( (resp: any) => {
          console.log(resp);
          this.usuarios = resp.usuarios;
          this.mantenimientos = resp.mantenimientos;
          this.maquinas = resp.maquinas;
        });

  }

}
