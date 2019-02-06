import { IUser } from "./../models/user";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// const url: string = "http://localhost:3000";
const url: string = "http://oday9.azurewebsites.net";

@Injectable({
  providedIn: "root"
})
export class UserService {
  isLogin: boolean = false;
  isAdmin: boolean = false;
  reqHeaderToken;
  constructor(private http: HttpClient) {
    let token = localStorage.getItem("token");
    if(token){
      this.isLogin = true;
    }
    this.reqHeaderToken = new HttpHeaders({
      "Authorization": "bearer " + token
    });
  }

  login(user: IUser) {
    return this.http.post(url + "/auth/login", user);
  }

  login2(user: IUser) {
    var userData =
      "username=" +
      user.email +
      "&password=" +
      user.password +
      "&grant_type=password";
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http.post(url + "/token", userData, {
      headers: reqHeader
    });
  }

  signUp(user: IUser) {
    return this.http.post(url + "/api/account/register", user);
  }

  get(): Observable<IUser[]> {
    return this.http.get<IUser[]>(url + "/api/users");
  }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(url + "/api/profile", {
      headers: this.reqHeaderToken
    });
  }
}
