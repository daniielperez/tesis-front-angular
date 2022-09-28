import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  public url: String = `${environment.apiUrl}/security/oauth`;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  usersKey = "angular-9-jwt-refresh-token-users";
  users = [];
  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    console.log(1);

    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Basic " + btoa("frontendapp:12345")
    );
    headers = headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    const body = new HttpParams()
      .set("username", username)
      .set("password", password)
      .set("grant_type", "password");

    return this.http
      .post<any>(this.url + "/token", body, { headers: headers })
      .pipe(
        map((user) => {
          this.users.push(user);
          localStorage.setItem(this.usersKey, JSON.stringify(this.users));
          this.userSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }

  logout() {
    // this.http
    //   .post<any>(
    //     `${environment.apiUrl}/users/revoke-token`,
    //     {},
    //     { withCredentials: true }
    //   )
    //   .subscribe();
    // this.stopRefreshTokenTimer();
    localStorage.setItem(this.usersKey, null);
    this.userSubject.next(null);
    this.router.navigate(["/login"]);
  }

  refreshToken() {
    return this.http
      .post<any>(
        `${environment.apiUrl}/users/refresh-token`,
        {},
        { withCredentials: true }
      )
      .pipe(
        map((user) => {
          this.userSubject.next(user);
          this.startRefreshTokenTimer();
          return user;
        })
      );
  }

  // helper methods

  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split(".")[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      timeout
    );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
