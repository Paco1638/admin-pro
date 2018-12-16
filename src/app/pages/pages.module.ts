import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

// ng2 Charts

import { ChartsModule } from "ng2-charts";

import { PagesComponent }  from './pages.component';

import { PAGES_ROUTES } from './pages.routes';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { MantenimientoComponent } from './mantenimientos/mantenimiento.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { MaquinaComponent } from './maquinas/maquina.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudComponent } from './solicitudes/solicitud.component';

import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        MantenimientosComponent,
        MantenimientoComponent,
        MaquinasComponent,
        MaquinaComponent,
        SolicitudesComponent,
        SolicitudComponent,
        BusquedaComponent
        
    ],

    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ],
})
export class PagesModule {}