import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  // Contains various info regarding the user.
  public user = null;

  constructor(private fireAuth: AngularFireAuth) { }

  // Checks if a user is logged in.
  public isUserLoggedIn() {
    this.fireAuth.user.subscribe((result) => {
      if (result == null) {
        console.log('No user signed in.');
      } else {
        console.log('User signed in.')
        console.log(result);

        this.user = result;
      }
    })
  }

  // Take an email and password and attempts to log in the user.
  public attemptSignUp(email: string, password: string) {
    this.doRegister(email, password).then(res => {
      console.log(res);
      console.log("Your account has been created");
      this.user = res['user'];
    }, err => {
      console.log(err);
      alert(err.message);
    })
  }

  // A helper method for the sign up. Not sure why it's done this way and it doesn't need to be...
  // Leaving just for reference!
  private doRegister(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  // Attempts to log in a user with given credentials.
  public attemptLogin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      this.user = res['user'];
    }, err => {
      alert(err.message);
    })
  }

  // Logs a user out if they're logged in.
  public logout() {
    firebase.auth().signOut().then(res => {
      console.log(res);
      this.user = null;
    }, err => {
      console.log(err);
    })
  }
}
