import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private menuController: MenuController, 
              private alertController: AlertController) { }

  usuario ={
    nombre:'',
    email:'',
    carrera: '',
    detalle: '',
  }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Su solicitud ha sido enviada!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  Enviar(){
    console.log('Enviado!');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.carrera='';
    this.usuario.detalle='';
  }
}
