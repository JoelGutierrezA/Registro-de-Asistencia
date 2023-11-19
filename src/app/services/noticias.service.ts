import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }

  getTopHeadine(){
    return this.Http.get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-23&sortBy=publishedAt&apiKey=331a69892717428d874d3b964b910259')
  }
}
