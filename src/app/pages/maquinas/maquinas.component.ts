import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/models/maquina.model';
import { MaquinaService } from 'src/app/services/service.index';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styles: []
})
export class MaquinasComponent implements OnInit {

  maquinas: Maquina[] = [];

  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor( public _maquinaService: MaquinaService ) { }

  ngOnInit() {
    this.cargarMaquinas();
  }

  cargarMaquinas(){

    this.cargando = true;

    this._maquinaService.cargarMaquinas( this.desde )
        .subscribe( (resp: any) => {

          this.totalRegistros = resp.total;
          this.maquinas = resp.maquinas;
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
    this.cargarMaquinas();
  }

  buscarMaquina( termino: string ){

    if ( termino.length <= 0 ){
      this.cargarMaquinas();
      return;
    }

    this._maquinaService.buscarMaquinas( termino )
        .subscribe( maquinas => this.maquinas = maquinas );
  }

  borrarMaquina( maquina: Maquina ){

    this._maquinaService.borrarMaquina( maquina._id )
        .subscribe( () => this.cargarMaquinas());
  }

}
