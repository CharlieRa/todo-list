import { Component, OnInit } from "@angular/core";

import { TodoService } from "../services";

import { Task } from "../models";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  todoListDone: Task[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoListDone = this.todoService.getTodoListDone();
  }
}
