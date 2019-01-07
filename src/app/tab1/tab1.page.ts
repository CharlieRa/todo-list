import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TodoService } from "../services";
import { Task } from "../models";
import { NewTodoModal } from "./new-todo-modal/new-todo-modal.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  todoList: Task[];

  constructor(
    private todoService: TodoService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
    console.log(this.todoList);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewTodoModal,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
