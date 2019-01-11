import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Router } from "@angular/router";

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
    this.googleService.login({}).then(
      res => {
        this.user = res;
        console.log(this.user);
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
        console.log("qwe");

        // if (this.user === null) {
        //   this.user = data;
        // }
        this.router.navigate(["/tabs/tab1"]);
      },
      error => {
        this.router.navigate(["/login"]);
      }
    );
  }
}
