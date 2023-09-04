import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mycurso',
  templateUrl: './mycurso.page.html',
  styleUrls: ['./mycurso.page.scss'],
})
export class MycursoPage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
