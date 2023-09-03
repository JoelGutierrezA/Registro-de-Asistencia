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
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Cursos',
      redirecTo: '/action-sheet',
      icon: 'library-outline'
    },
    {
      name: 'Alert',
      redirecTo: '/alert',
      icon: 'bug-outline'
    },
    {
      name: 'Solicitudes',
      redirecTo: '/formulario',
      icon: 'key-outline'
    },
  ]

}
