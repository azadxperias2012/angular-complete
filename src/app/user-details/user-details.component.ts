import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userName: string = '';
  userCleared: boolean = this.userName.length == 0;

  constructor() { }

  ngOnInit() {
  }

  onClearUser() {
    this.userName = '';
  }

}
