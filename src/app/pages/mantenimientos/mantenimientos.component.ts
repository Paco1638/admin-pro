import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { MantenimientoService } from 'src/app/services/service.index';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styles: []
})
export class MantenimientosComponent implements OnInit {

  mantenimientos: Mantenimiento[] = [];

  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor( public _mantenimientoService: MantenimientoService ) { }

  ngOnInit() {
    this.cargarMantenimientos();
  }

  cargarMantenimientos(){

    this.cargando = true;

    this._mantenimientoService.cargarMantenimientos( this.desde )
        .subscribe( (resp: any) => {

          this.totalRegistros = resp.total;
          this.mantenimientos = resp.mantenimientos;
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
    this.cargarMantenimientos();
  }

  buscarMantenimiento( termino: string ){

    if ( termino.length <= 0 ){
      this.cargarMantenimientos();
      return;
    }

    this._mantenimientoService.buscarMantenimientos( termino )
        .subscribe( mantenimientos => this.mantenimientos = mantenimientos );
  }

  borrarMantenimiento( mantenimiento: Mantenimiento ){

    this._mantenimientoService.borrarMantenimiento( mantenimiento._id )
        .subscribe( () => this.cargarMantenimientos());
  }   
}
