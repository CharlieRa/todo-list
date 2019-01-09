import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = null;

  constructor(private googleService: GooglePlus) {}

  loginWithGoogle() {
    this.googleService.login({}).then(
      res => {
        console.log("good");
        this.user = res;
        console.log(res);
      },
      err => {
        console.log("error");
        console.log(err);
      }
    );
  }

  logoutGoogle() {
    this.googleService.logout().then(() => (this.user = null));
  }
}
