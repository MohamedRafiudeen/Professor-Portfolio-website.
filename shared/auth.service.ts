import { Injectable } from "@angular/core";

import { AngularFireModule } from "@angular/fire";

import { AngularFireAuth } from "@angular/fire/auth";

import { Router } from "@angular/router";
import { map } from "rxjs/operators";

import { auth } from "firebase";
@Injectable({
  providedIn: "root"
})
export class AuthService {

  user:any = '';
  userLoggedIn = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    ) {}


    getState(){
      this.afAuth.authState.subscribe(user => {
        if(user){
          this.userLoggedIn = true;
          this.user = user;
          console.log("UserLoggedIn ?", this.userLoggedIn);
          console.log("curently signedIn User:", user);

        }
        else{
          this.userLoggedIn = false;
          console.log("UserLoggedIn ?", this.userLoggedIn);
          console.log("No user Logged in at the moment.");

        }
      })
    }



  createNewUser(email:string, password:any) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.getState();
  }

  logIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
