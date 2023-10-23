import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/services/apicrud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  usuario = {
    id:0,
    nombre:"",
    apellido:"",
    username:"",
    role:""
  }

  constructor(private router:Router, 
              private apiCrud: ApicrudService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
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
  
  eliminarUsuario(){
    this.apiCrud.EliminarUsuario(this.usuario).subscribe();
    this.router.navigateByUrl("listar");
  }
}
