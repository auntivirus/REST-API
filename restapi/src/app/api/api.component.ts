import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  myUser!: any;

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.myUser = res;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}