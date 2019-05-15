import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'; // [4.1b]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = false; // [3.2b]
  users: Object; // [4.2e]

  // [4.1c]
  constructor(private data: DataService) { }

  // [4.2f]
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  // [3.1b]
  firstClick() {
    // console.log('clicked');
    this.h1Style = !this.h1Style;
  }



}
