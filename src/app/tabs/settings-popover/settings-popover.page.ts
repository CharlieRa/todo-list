import { Component } from "@angular/core";
import { AuthService } from "src/app/services";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-settings-popover",
  templateUrl: "settings-popover.page.html"
})
export class SettingsPopover {
  constructor(
    public authService: AuthService,
    public popoverController: PopoverController
  ) {}

  logout() {
    this.popoverController.dismiss();
    this.authService.logoutGoogle();
  }
}
