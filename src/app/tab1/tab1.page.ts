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

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  todoList;
  user = null;
  constructor(
    private authService: AuthService,
    public modalController: ModalController,
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoList = this.firebaseService.getTodoList().valueChanges();
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

  getUserData() {
    if (this.user === null) {
      this.nativeStorage.getItem("todoListGoogleUser").then(
        data => {
          console.log("tab", data);
          this.user = data;
        },
        error => {
          this.router.navigate(["/login"]);
        }
      );
    }
  }
}
