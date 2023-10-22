import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers():Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/usuarios`);
  }
  GetUserById(codigo:any): Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  IsExiste(){
    if (this.IsLoggedIn()){
      return true
    }
    else{
      return false
    }
  }
}
