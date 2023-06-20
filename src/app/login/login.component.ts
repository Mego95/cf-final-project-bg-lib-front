import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const user = this.form.value;
      this.authService.login(user.username, user.password).subscribe((response) => {
        if (response.status === 200) {
          localStorage.setItem("authToken", response.token);
          let token = localStorage.getItem("authToken");
          if (token !== null) {
            this.authService.isLoggedInSubject.next(true);
            this.authService.usernameSubject.next(user.username);
            this.router.navigate(["/boardgames-list"])
          } else {
            this.authService.isLoggedInSubject.next(false);
          }
        }
      })

    } else {
      console.log("form is not valid")
    }
  }
}
