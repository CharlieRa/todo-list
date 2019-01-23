import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Router } from "@angular/router";
import { auth } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = null;

  constructor(
    private googleService: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router
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
          const googleCredential = auth.GoogleAuthProvider.credential(
            res.idToken
          );
          auth()
            .signInWithCredential(googleCredential)
            .then(response => {});
          this.nativeStorage.setItem("todoListGoogleUser", this.user).then(
            () => {
              this.router.navigate(["/tabs/tab1"]);
            },
            error => console.error("Error storing item", error)
          );
        },
        err => {
          console.log(err);
        }
      );
  }
  /**
   * Logout google user
   */
  logoutGoogle() {
    this.googleService
      .trySilentLogin({})
      .then(res => {
        this.googleService.logout().then(
          res => {
            this.nativeStorage.remove("todoListGoogleUser");
            this.router.navigate(["/login"]);
          },
          err => {
            console.log(err);
          }
        );
      })
      .catch(error => {
        this.googleService
          .disconnect()
          .then(res => {})
          .catch(error => {
            console.log(error);
          });
      });
  }
  /**
   * Get user logged
   */
  getUserData() {
    if (this.user === null) {
      this.nativeStorage.getItem("todoListGoogleUser").then(
        data => {
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
