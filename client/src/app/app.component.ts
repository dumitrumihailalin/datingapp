import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { MembersService } from './_services/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = true;
  constructor(private http: HttpClient, private accountService: AccountService, private memberService: MembersService) {
  }

  users: any;

  ngOnInit(): void {
    this.setCurrentUser();
    this.loggedIn = !!this.accountService.getAuth();
    console.log(this.loggedIn)
  }

  async getCurrentUser()
  {
    await this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    });
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
