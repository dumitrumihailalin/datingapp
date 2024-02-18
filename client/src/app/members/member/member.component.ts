import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() member: Member | undefined;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
  }
  addFavourite(UserId: any) {    
    this.memberService.addFavourite(UserId).subscribe();
  }
}
