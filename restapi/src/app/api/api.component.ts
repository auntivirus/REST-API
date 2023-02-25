import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  newDetails = new FormGroup( {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    salary: new FormControl('', [Validators.required]),
  }
  );
  myUser!: any;

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  saveUser(userObj: any) {
    this.userService.saveNewUser(userObj).subscribe(
      res => {
        // alert("Details saved successfully");
        this.newDetails.reset();
        this.getAllUsers();

      }, 
      err => {console.log(err)}
      );
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