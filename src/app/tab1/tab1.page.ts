import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  LoadingController,
  PopoverController
} from "@ionic/angular";
import { FirebaseService, AuthService } from "../services";
import { NewTodoModal } from "./new-todo-modal/new-todo-modal.page";
import { Router } from "@angular/router";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { SettingsPopover } from "../tabs/settings-popover/settings-popover.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  todoList;
  user = null;
  constructor(
    public authService: AuthService,
    public modalController: ModalController,
    public firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    public nativeStorage: NativeStorage,
    public router: Router,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.getUserData();
  }
  /**
   * Muestra modal con formulario para agergar nuevo todo
   */
  async presentModal() {
    console.log(this.user.userId);
    const modal = await this.modalController.create({
      component: NewTodoModal,
      componentProps: { userId: this.user.userId }
    });
    return await modal.present();
  }
  /**
   *
   */
  getUserData() {
    if (this.user === null) {
      this.nativeStorage.getItem("todoListGoogleUser").then(
        data => {
          this.user = data;
          this.todoList = this.firebaseService
            .getTodoList(this.user.userId)
            .valueChanges();
        },
        error => {
          this.router.navigate(["/login"]);
        }
      );
    }
  }
  /**
   *
   */
  async presentPopover(ev: any) {
    console.log("click popover", ev);
    const popover = await this.popoverController.create({
      component: SettingsPopover,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
