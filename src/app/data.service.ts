import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // [4.2b]

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // [4.2c]
  constructor(private http: HttpClient) { }

  // [4.1a]
  getUsers() {
    // return console.log('clicked');
  return this.http.get('https://reqres.in/api/users'); // [4.2d]
  }



}
