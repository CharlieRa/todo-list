import { Component, Input, Inject } from "@angular/core";
import { NavParams, LoadingController, AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FirebaseService } from "../../services";

@Component({
  selector: "app-new-todo-modal",
  templateUrl: "./new-todo-modal.page.html"
})
export class NewTodoModal {
  @Input() value: number;
  newTodoForm: FormGroup;

  constructor(
    navParams: NavParams,
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firebaseService: FirebaseService
  ) {
    console.log(this.value);
    this.newTodoForm = this.formBuilder.group({
      title: [null, Validators.required],
      task: [null, Validators.required],
      detail: [null, Validators.required]
    });
    // componentProps can also be accessed at construction time using NavParams
  }

  async addTodo() {
    console.log(this.newTodoForm.valid);
    console.log(this.newTodoForm.value);
    const loading = await this.loadingCtrl.create();

    const userId = "carlos";
    const title = this.newTodoForm.value.title;
    const task = this.newTodoForm.value.task;
    const detail = this.newTodoForm.value.detail;

    this.firebaseService.addNewTodo(userId, title, task, detail).then(
      () => {
        loading.dismiss().then(() => {
          // this.router.navigateByUrl("");
          console.log("loading dismiss");
        });
      },
      error => {
        console.error(error);
      }
    );

    return await loading.present();
  }
}
