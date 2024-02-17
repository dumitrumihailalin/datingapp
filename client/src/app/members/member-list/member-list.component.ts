import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberSevice: MembersService, private accountService: AccountService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (!user) return
    this.accountService.setCurrentUser(user.token);
    this.loadMembers();
  }

  loadMembers() {
    this.memberSevice.getMembers().subscribe({
      next: members => this.members = members
    });
  }
}
