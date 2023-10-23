import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  usuario = {
    id:0,
    nombre:"",
    apellido:"",
    username:"",
    role:""
  }
  constructor(private apiCrud: ApicrudService, 
              private router: Router) { }

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

}