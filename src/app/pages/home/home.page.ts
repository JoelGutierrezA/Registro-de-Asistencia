import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuController: MenuController,
              private router: Router,
              private noticiasService: NoticiasService,
              private authService: AuthService) { }

  ngOnInit() {
      this.noticiasService.getTopHeadine().subscribe(resp =>{
        console.log('noticias', resp);
      });
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('ingresado');

    // Redirige al usuario a la página de inicio de sesión o a la página principal
    this.router.navigate(['/inicio']);
  }
}
