import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {AuthAPIService} from "../services/auth-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  emailEntered: string = "";
  passwordEntered: string = "";

  constructor(private authApi: AuthAPIService,
              private fireAuth: AngularFireAuth,
              private router: Router) {
    this.fireAuth.user.subscribe((result) => {
      if (result == null) {
        console.log('No user signed in.');
      } else {
        console.log('User signed in.')
        console.log(result);

        this.authApi.user = result;
        this.router.navigate(['/home']);
      }
    })
  }

  ngOnInit(): void {
  }

  public login() {
    firebase.auth().signInWithEmailAndPassword(this.emailEntered, this.passwordEntered).then(res => {
      console.log(res);
      this.authApi.user = res['user'];

      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
    })
  }

  public logout() {
    this.authApi.logout();
  }
}
