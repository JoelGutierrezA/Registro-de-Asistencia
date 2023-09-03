import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.page.html',
  styleUrls: ['./isesion.page.scss'],
})
export class IsesionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  sesion = {
    email:'',
    password:''
  }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
