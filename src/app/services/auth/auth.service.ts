import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Router } from "@angular/router";
import firebase from "@firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = null;

  constructor(
    private googleService: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router,
    private auth: AngularFireAuth
  ) {}

  /**
   * Login with native google
   */
  async loginWithGoogle(): Promise<void> {
    this.googleService
      .login({
        webClientId:
          "22054706801-7maf5ikecquf70i65jfmoe315uksi26d.apps.googleusercontent.com",
        offline: true
      })
      .then(
        res => {
          this.user = res;
          console.log(this.user);
          console.log(firebase);
          // console.log(this.auth.auth.signInWithCredential);
          const googleCredential = firebase.auth.GoogleAuthProvider.credential(
            res.idToken
          );
          console.log(googleCredential);

          firebase
            .auth()
            .signInWithCredential(googleCredential)
            .then(response => {
              console.log("firebase response", response);
            });
          this.nativeStorage.setItem("todoListGoogleUser", this.user).then(
            () => {
              console.log("Stored item!");
              this.router.navigate(["/tabs/tab1"]);
            },
            error => console.error("Error storing item", error)
          );
        },
        err => {
          console.log("error");
          console.log(err);
        }
      );
  }
  /**
   * Logout google user
   */
  logoutGoogle() {
    this.googleService.logout().then(
      res => {
        this.nativeStorage.remove("todoListGoogleUser");
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
  /**
   * Get user logged
   */
  getUserData() {
    if (this.user === null) {
      this.nativeStorage.getItem("todoListGoogleUser").then(
        data => {
          console.log(data);
          this.user = data;
          return this.user;
        },
        error => {
          this.router.navigate(["/login"]);
        }
      );
    } else {
      return this.user;
    }
  }
  /**
   *
   */
  isLogged() {
    this.nativeStorage.getItem("todoListGoogleUser").then(
      data => {
        this.router.navigate(["/tabs/tab1"]);
      },
      error => {
        this.router.navigate(["/login"]);
      }
    );
  }
}
