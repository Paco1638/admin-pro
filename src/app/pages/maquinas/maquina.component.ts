import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maquina } from 'src/app/models/maquina.model';
import { MaquinaService, MantenimientoService } from 'src/app/services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Mantenimiento } from 'src/app/models/mantenimiento';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styles: []
})
export class MaquinaComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;
  maquina: Maquina = new Maquina('','','','','','','');
  mantenimiento: Mantenimiento = new Mantenimiento('','','','','','');

  constructor( public _maquinaService: MaquinaService,
               public _modalUploadService: ModalUploadService,
               public _mantenimientoService: MantenimientoService,
               public router: Router,
               public activatedRoute: ActivatedRoute ) { 

                activatedRoute.params.subscribe( params => {

                  let id = params['id'];

                  if ( id !== 'nuevo' ){
                    this.cargarMaquina( id );
                  }
                });
               }

  ngOnInit() {

    this._modalUploadService.notificacion
        .subscribe( resp => {
          this.maquina.img = resp.maquina.img;
        });
  }

  guardarMaquina( f: NgForm ){

    if ( f.invalid ){
      return;
    }

    this._maquinaService.guardarMaquina( this.maquina )
        .subscribe( maquina => {

          this.maquina._id = maquina._id;
          this.router.navigate( ['/maquina', maquina._id] );

        });
  }

  cargarMaquina( id: string ){
    this._maquinaService.cargarMaquina( id )
        .subscribe( maquina => this.maquina = maquina );
  }

  cambiarFoto(){

    this._modalUploadService.mostrarModal( 'maquinas', this.maquina._id );

  }
}
