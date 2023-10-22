import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newUsuario: User={
    id: 0,
    nombre: "",
    apellido: "",
    username: "",
    password: "",
    role: "",
    isactive: true,
  }

  constructor(private apiCrud: ApicrudService,
    private router: Router) { }

  ngOnInit() {
  }

  crearUsuario(){
    this.apiCrud.CrearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/inicio");
  }
}
