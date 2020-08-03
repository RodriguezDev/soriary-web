import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthAPIService} from "../services/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private fireAuth: AngularFireAuth,
              private authApi: AuthAPIService,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: improve this logic. Should return false rather than just rely on a redirect.
    this.fireAuth.user.subscribe((result) => {
      if (result == null) {
        console.log('No user signed in.');
        this.router.navigate(['/login']);
        return false;
      } else {
        console.log('User signed in.')
        console.log(result);

        this.authApi.user = result;
        return true;
      }
    })
    return true;
  }
}
