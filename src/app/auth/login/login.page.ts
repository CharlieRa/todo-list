import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "@firebase/app";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  user;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  // signInWithGoogle() {
  //   console.log("sigin with google using angular firebase");
  //   console.log(firebase);
  //   this.afAuth.auth
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then(res => console.log(res));
  // }

  loginWithGoogle() {
    this.user = this.authService.loginWithGoogle();
    console.log(this.user);
  }
}
