import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SolicitudService } from 'src/app/services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styles: []
})
export class SolicitudComponent implements OnInit {

  solicitud: Solicitud = new Solicitud('','','','','');

  constructor( public _solicitudService: SolicitudService,
               public _modalUploadService: ModalUploadService,
               public router: Router,
               public activatedRoute: ActivatedRoute ) {

                activatedRoute.params.subscribe( params => {

                  let id = params['id'];

                  if ( id !== 'nuevo' ){
                    this.cargarSolicitud( id );
                  }
                });
               }

  ngOnInit() {        
  }

  guardarSolicitud( f: NgForm ){

    if ( f.invalid ){
      return;
    }

    this._solicitudService.guardarSolicitud( this.solicitud )
        .subscribe( solicitud => {

          this.solicitud._id = solicitud._id;
          this.router.navigate( ['/solicitud', solicitud._id] );

        });
  }

  cargarSolicitud( id: string ){
    this._solicitudService.cargarSolicitud( id )
        .subscribe( solicitud => this.solicitud = solicitud );
  }
}
