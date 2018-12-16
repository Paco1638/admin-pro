import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

import { LoginGuardGuard, AdminGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

// M. Industrial
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { MaquinaComponent } from './maquinas/maquina.component';
import { MantenimientoComponent } from './mantenimientos/mantenimiento.component';
import { SolicitudComponent } from './solicitudes/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
            { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
            
            // =========================================================================================
            // M. Industrial
            // =========================================================================================
            { 
                path: 'usuarios', 
                component: UsuariosComponent, 
                canActivate: [ AdminGuardGuard ],
                data: { titulo: 'Usuarios' } 
            },

            { path: 'mantenimientos', component: MantenimientosComponent, data: { titulo: 'Mantenimiento' } },
            { path: 'mantenimiento/:id', component: MantenimientoComponent, data: { titulo: 'Mantenimiento' } },

            { path: 'maquinas', component: MaquinasComponent, data: { titulo: 'Maquinas' } },
            { path: 'maquina/:id', component: MaquinaComponent, data: { titulo: 'Crear Maquina' } },

            { path: 'solicitudes', component: SolicitudesComponent, data: { titulo: 'Solicitudes' } },
            { path: 'solicitud/:id', component: SolicitudComponent, data: { titulo: 'Crear Solicitud' } },
            
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
