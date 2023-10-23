import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuario = {
    id:0,
    nombre:"",
    apellido:"",
    username:"",
    role:""
  }

  constructor(private apiCrud: ApicrudService, 
              private router: Router) { }


  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }


  ngOnInit() {
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(animalitoID:number){
    this.apiCrud.BuscarUsuarioId(animalitoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          username: resp[0].username,
          role: resp[0].role
        }
      }
    )
  }

  updateAnimalito(){
      this.apiCrud.ActualizarUsuario(this.usuario).subscribe();
      this.router.navigateByUrl("/listar");
  }

}
