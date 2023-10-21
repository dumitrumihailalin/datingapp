import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any;
  title: any;

  constructor(private http: HttpClient) {
    this.title = '34. Safe storage of passwords';
  }

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    })
  }
}
