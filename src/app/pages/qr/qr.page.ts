import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { IPalabra } from 'src/app/interfaces/interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje: string;

  data={
    texto:''
  }

  nombre: any;

  newPalabra: IPalabra={
    palabra:'',
    username:''
  }

  generarQr(){
    this.mensaje=this.data.texto;
    this.newPalabra.username=this.nombre;
    this.newPalabra.palabra=this.mensaje;
    this.apicrudservise.CrearPalabra(this.newPalabra).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Palabra creada',
      message: 'Su QR ha sido almacenado',
      buttons: ['OK']
    });
    alerta.present();
  }

  

  constructor(private apicrudservise: ApicrudService,
              private alertController: AlertController) {
    this.mensaje='Hola Mundo';
    this.nombre=sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

}
