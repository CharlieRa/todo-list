import { Injectable } from "@angular/core";
import { Task } from "../../models";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoList: Task[];

  constructor() {
    this.todoList = [
      // new Task(1, "Douglas  Pace", "Douglas  Pace", "Douglas  Pace", false),
      // new Task(1, "Douglas  Pace", "Douglas  Pace", "Douglas  Pace", true)
    ];
  }
  /**
   *
   */
  getTodoList() {
    return this.todoList;
  }
  /**
   *
   */
  getTodoListDone() {
    return this.todoList.filter(todo => todo.done === true);
  }
}
