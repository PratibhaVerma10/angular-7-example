import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  }
  // firstClick() {
  //   this.h1Style = true;
  //   console.log('clicked');
  // }
  // or
  // firstClick() {
  //   this.data.firstClick();
  // }
  

}
