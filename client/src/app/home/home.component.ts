import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private accountService: AccountService,) { }

  ngOnInit(): void {
    this.loggedIn = this.getCurrentUser();
  }
  getCurrentUser()
  {
    return this.accountService.getCurrentUser();
  }
}
