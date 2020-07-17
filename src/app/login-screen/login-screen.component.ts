import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  emailEntered: string = "";
  passwordEntered: string = "";

  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.user.subscribe((result) => {
      if (result == null) {
        console.log('No user signed in.');
      } else {
        console.log('User signed in.')
        console.log(result);
      }
    })
  }

  ngOnInit(): void {
  }

  public attemptSignUp() {
    console.log(this.emailEntered);
    console.log(this.passwordEntered);

    this.doRegister(this.emailEntered, this.passwordEntered).then(res => {
      console.log(res);
      console.log("Your account has been created");
    }, err => {
      console.log(err);
      alert(err.message);
    })
  }

  doRegister(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  public attemptLogin() {
    firebase.auth().signInWithEmailAndPassword(this.emailEntered, this.passwordEntered).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  logout() {
    firebase.auth().signOut().then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
