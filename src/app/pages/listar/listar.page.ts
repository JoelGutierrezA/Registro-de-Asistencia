import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})

export class ListarPage {

  usuarios:User[]=[];

  constructor(private menuController: MenuController,
              private usuariosService: ApicrudService,
              private loadingCtrl: LoadingController) { }

  MostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter(){
  this.loadUsuarios();
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.usuariosService.listarUsuarios().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.usuarios=JSON.parse(listString)
          event?.target.complete();
          console.log(this.usuarios);
          
        },
        error: err =>{
          console.log(err.error.message);
        loading.dismiss();
        }
      }
    )
  }
}
