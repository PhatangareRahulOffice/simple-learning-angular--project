import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL_REGISTER = 'http://localhost:3000/user/register';
const API_URL_LOGIN = 'http://localhost:3000/user/login';
const API_URL_GETUSER = 'http://localhost:3000/user/get'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post(API_URL_REGISTER, user);

  }
  loginUser(user:any,cookies:any){
    return this.http.post(API_URL_LOGIN,user,cookies);

  }
  getUser(cookies:any){
    return this.http.get(API_URL_GETUSER,cookies);
  }
}
