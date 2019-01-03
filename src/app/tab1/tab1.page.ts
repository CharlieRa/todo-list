import { Component, OnInit } from "@angular/core";

import { TodoService } from "../services";

import { Task } from "../models";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  todoList: Task[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
    console.log(this.todoList);
  }
}
