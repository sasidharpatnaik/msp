import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  public upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', url+'/candidate/uploadResume' , formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

}
