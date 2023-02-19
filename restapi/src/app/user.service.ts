import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
// getUsers() {
//   const user = [
//     {"id":101,"name":"Chirag","salary":123456,"dept":"abcd"},
//     {"id":102,"name":"Sachin","salary":789012,"dept":"efgh"},
//     {"id":103,"name":"Akshay","salary":345678,"dept":"ijkl"}
//   ];
//   return user;
// }
constructor(private http: HttpClient) { }
url = "https://jsonplaceholder.typicode.com/users";
getUsers() {
  return this.http.get(this.url);
}
}
