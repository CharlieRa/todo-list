import { Component } from "@angular/core";
import { AuthService } from "src/app/services";

@Component({
  selector: "app-settings-popover",
  templateUrl: "settings-popover.page.html"
})
export class SettingsPopover {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logoutGoogle();
  }
}
