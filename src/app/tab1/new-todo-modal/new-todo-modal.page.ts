import { Component, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-new-todo-modal",
  templateUrl: "./new-todo-modal.page.html"
})
export class NewTodoModal {
  // 'value' passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams) {
    console.log(this.value);
    // componentProps can also be accessed at construction time using NavParams
  }
}
