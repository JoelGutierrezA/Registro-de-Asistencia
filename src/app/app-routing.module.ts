import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'isesion',
    loadChildren: () => import('./pages/isesion/isesion.module').then( m => m.IsesionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then( m => m.CorreoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule),
    canActivate: [AutorizadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
