import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { TodoService, FirebaseService } from "../services";
import { Task } from "../models";
import { NewTodoModal } from "./new-todo-modal/new-todo-modal.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  todoList;

  constructor(
    private todoService: TodoService,
    public modalController: ModalController,
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.todoList = this.firebaseService.getTodoList().valueChanges();
  }
  /**
   * Muestra modal con formulario para agergar nuevo todo
   */
  async presentModal() {
    const modal = await this.modalController.create({
      component: NewTodoModal,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
