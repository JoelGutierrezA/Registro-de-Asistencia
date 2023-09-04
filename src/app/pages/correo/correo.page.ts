import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  
  MostrarMenu(){
    this.menuController.open('first');
  }

}
