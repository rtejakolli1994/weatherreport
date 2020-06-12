import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseurl = 'https://pixabay.com/api';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  searchCity(data){
    return this.http.get(this.baseurl + `/?key=17010698-936e138574ed5ae2664c7cca7&q=${data}&image_type=photo`, this.httpOptions)
  };

}
