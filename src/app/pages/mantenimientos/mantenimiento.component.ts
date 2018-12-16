import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MantenimientoService, UsuarioService } from 'src/app/services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styles: []
})
export class MantenimientoComponent implements OnInit {

  mantenimiento: Mantenimiento = new Mantenimiento('','','','','','');
  usuario: Usuario = new Usuario('','','','','');

  constructor( public _mantenimientoService: MantenimientoService,
               public _modalUploadService: ModalUploadService,
               public _usuarioService: UsuarioService,
               public router: Router,
               public activatedRoute: ActivatedRoute ) {

                activatedRoute.params.subscribe( params => {

                  let id = params['id'];

                  if ( id !== 'nuevo' ){
                    this.cargarMantenimiento( id );
                  }
                });
               }

  ngOnInit() {        
  }

  guardarMantenimiento( f: NgForm ){

    if ( f.invalid ){
      return;
    }

    this._mantenimientoService.guardarMantenimiento( this.mantenimiento )
        .subscribe( mantenimiento => {

          this.mantenimiento._id = mantenimiento._id;
          this.router.navigate( ['/mantenimiento', mantenimiento._id] );

        });
  }

  cargarMantenimiento( id: string ){
    this._mantenimientoService.cargarMantenimiento( id )
        .subscribe( mantenimiento => this.mantenimiento = mantenimiento );
  }
}
