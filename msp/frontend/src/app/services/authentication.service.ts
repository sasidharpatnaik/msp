import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'    
  })
};

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  public login(data: any) {
    return this.http.post(url+"/authentication",data, httpOptions);
  }

  public saveUser(data: any) {
    const tokenStr = JSON.stringify(data)
    let tokenParse = JSON.parse(tokenStr)
    sessionStorage.setItem('token', tokenParse.token)
  }
}
