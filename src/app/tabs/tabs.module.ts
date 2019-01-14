import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs.router.module";
import { TabsPage } from "./tabs.page";
import { TodoService, FirebaseService } from "../services";
import { SettingsPopover } from "./settings-popover/settings-popover.page";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [TabsPage, SettingsPopover],
  providers: [TodoService, FirebaseService],
  entryComponents: [TabsPage, SettingsPopover]
})
export class TabsPageModule {}
