import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  ngOnInit(): void {
    this.getAllUsers();
  }
  newDetails = new FormGroup( {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    salary: new FormControl('', [Validators.required]),
  }
  );
  myUser: any;
  userDetail: any;

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  getUserDetailsById(x: any) {
   return this.userService.getUserById(x.id);
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
  userId!: number;
  editUser(userObj: any) {
    this.userId = userObj.id;
    this.newDetails.controls.name.setValue(userObj.name);
    this.newDetails.controls.email.setValue(userObj.email);
    this.newDetails.controls.salary.setValue(userObj.salary);
  }

  updateExistingUser() {
    this.userService.updateExistingUser(this.userId, this.newDetails.value).subscribe(
      res => {
        alert("User updated successfully");
        this.newDetails.reset();
        this.getAllUsers();
      },
      err => {
        console.log(err);
        alert("Error Updating User Details");
      }
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

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      res => {
        alert("Deleted successfully!!");
        this.getAllUsers();
      },
      err => {
        alert("Some error occured");
        this.getAllUsers();
      }
    );
  }
}