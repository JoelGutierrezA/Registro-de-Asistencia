import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      name: 'Home',
      redirecTo: '/home',
      icon: 'home-outline'
    },
    {
      name: 'Cursos',
      redirecTo: '/action-sheet',
      icon: 'library-outline'
    },
    {
      name: 'Correo',
      redirecTo: '/correo',
      icon: 'mail-outline'
    },
    {
      name: 'Solicitudes',
      redirecTo: '/formulario',
      icon: 'key-outline'
    },
    {
      name: 'Usuarios',
      redirecTo: '/listar',
      icon: 'list-outline'
    },
  ]

}
