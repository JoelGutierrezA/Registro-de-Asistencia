import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApicrudService {

  constructor(private httpClient: HttpClient) { }
  listarUsuarios():Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: User): Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  BuscarUsuarioId(id:number):Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<User>{
    return this.httpClient.put<User>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  EliminarUsuario(usuario:any): Observable<User>{
    return this.httpClient.delete<User>(`${environment.apiUrl}/usuarios/${usuario.id}`);
  }
}
