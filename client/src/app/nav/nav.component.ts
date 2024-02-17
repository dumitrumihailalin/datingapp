import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: boolean = false;
  submitted: boolean = false;

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.accountService.getAuth();
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        this.router.navigateByUrl("/members");
        this.model.username = ""
        this.model.password = ""
      },
      error: error => alert("Invalid data")
    });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
    this.router.navigateByUrl("/");
  }
}
