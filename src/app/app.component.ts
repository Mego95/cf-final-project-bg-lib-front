import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Mego's Boardgame Library";
  username = this.service.username$;
  isLoggedIn = this.service.isLoggedIn$;

  constructor(private service: AuthService) {}

  logout() {
    localStorage.removeItem("authToken");
    let token = localStorage.getItem("authToken");
    if (token === null) {
      this.service.isLoggedInSubject.next(false);
      this.service.usernameSubject.next('');
    }
  }
}
