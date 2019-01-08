import { Component, Input, Inject } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-todo-modal",
  templateUrl: "./new-todo-modal.page.html"
})
export class NewTodoModal {
  // 'value' passed in componentProps
  @Input() value: number;
  todoForm: FormGroup;

  constructor(
    navParams: NavParams,
    @Inject(FormBuilder) private formBuilder: FormBuilder
  ) {
    console.log(this.value);
    this.todoForm = this.formBuilder.group({
      title: [null, Validators.required],
      task: [null, Validators.required],
      detail: [null, Validators.required]
    });
    // componentProps can also be accessed at construction time using NavParams
  }
}
