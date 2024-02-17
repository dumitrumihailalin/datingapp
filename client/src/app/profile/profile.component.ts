import { Component, OnInit } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { Member } from '../_models/member';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Member | undefined;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.memberService.getProfile().subscribe({
      next: profile => this.profile = profile
    })
  }

}
