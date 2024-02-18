import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  getProfile() {
    return this.http.get<Member>(this.baseUrl + 'profile/');
  }

  addFavourite(model: any) {
    model = {'userId': model};
    return this.http.post<Member>(this.baseUrl + 'profile/add-favourite', model);
  }
}
