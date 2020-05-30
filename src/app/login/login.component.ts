import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  private static isAuth: boolean = false;
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  usernameChange(): void {
    console.log(this.username);
  }
  pwdChange(): void {
    console.log(this.password);
  }
  isAuthenticated(): boolean {
    return LoginComponent.isAuth;
  }

  onClick(): void {
    console.log("on click");
    if (this.username == this.password) {
      sessionStorage.setItem('user', this.username);
      LoginComponent.isAuth = true;
      console.log(this.isAuthenticated())

      this.router.navigate(['/welcome']);
    }
  }
}
