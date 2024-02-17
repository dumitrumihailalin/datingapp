import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { User }   from '../_models/user';
import { environment } from 'src/environments/environment.development';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new BehaviorSubject<User | null>(null);
  baseUrl = environment.apiUrl;
  private isLoggedin: boolean = false;
  constructor(private http: HttpClient, private presenceService: PresenceService) { }
  currentUser$ = this.currentUserSource.asObservable();
  login(model: User) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map( ( response: User ) => {
        const user = response;
        const username = response.username
        localStorage.setItem('username', username);

        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }

  getUsername(): any {
    return localStorage.getItem("username") === null ? "" : localStorage.getItem("username");
  }

  getAuth(): any {
    return localStorage.getItem("user") === null ? false : true;
  }

  getCurrentUser() {
    var user = localStorage.getItem('user');
    if (user === undefined) 
      return false
    else 
      return true;
  }

  setCurrentUser(user: User) {
    if (user!== undefined) {
      localStorage.setItem('user', JSON.stringify(user));

      this.currentUserSource.next(user);  
      this.isLoggedin = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
  }
}
