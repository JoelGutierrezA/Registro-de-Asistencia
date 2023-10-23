import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuController: MenuController,
              private noticiasService: NoticiasService) { }

  ngOnInit() {
      this.noticiasService.getTopHeadine().subscribe(resp =>{
        console.log('noticias', resp);
      });
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
