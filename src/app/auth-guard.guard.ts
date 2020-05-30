import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor (private auth: LoginComponent, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.auth.isAuthenticated())
    if (this.auth.isAuthenticated()){
      console.log("ads")
      return true;
    } else {
      console.log("here")
      this.router.navigate(['/login']); 
      return false;
    }
  }
  
}
