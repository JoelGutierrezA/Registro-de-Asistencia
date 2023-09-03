import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
