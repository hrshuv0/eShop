import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser } from "../_models/user";
import {BehaviorSubject, map, of, ReplaySubject} from "rxjs";
import { Router } from "@angular/router";
import {IAddress} from "../_models/address";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  loadCurrentUser(token: string) {
    if (token === null) {
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', { headers: headers }).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user); // set the current user
        }
      })
    );
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: IUser) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', user.token); // set the token
          this.currentUserSource.next(user); // set the current user
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', user.token); // set the token
          this.currentUserSource.next(user); // set the current user
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // set the token
    this.currentUserSource.next(null); // set the current user
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress() {
    return this.http.get<IAddress>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: IAddress) {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address);
  }






}
