import { Component, Input, Inject } from "@angular/core";
import {
  LoadingController,
  AlertController,
  ModalController
} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FirebaseService } from "../../services";

@Component({
  selector: "app-new-todo-modal",
  templateUrl: "./new-todo-modal.page.html"
})
export class NewTodoModal {
  @Input() userId: string;
  newTodoForm: FormGroup;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    public alertCtrl: AlertController,
    private firebaseService: FirebaseService
  ) {
    this.newTodoForm = this.formBuilder.group({
      title: [null, Validators.required],
      task: [null, Validators.required],
      detail: [null, Validators.required]
    });
    // componentProps can also be accessed at construction time using NavParams
  }
  /**
   * Validate form and create new todo
   */
  async addTodo() {
    const loading = await this.loadingCtrl.create();
    const title = this.newTodoForm.value.title;
    const task = this.newTodoForm.value.task;
    const detail = this.newTodoForm.value.detail;

    this.firebaseService.addNewTodo(this.userId, title, task, detail).then(
      () => {
        loading.dismiss().then(() => {
          this.closeModal();
        });
      },
      error => {
        console.error(error);
      }
    );
    return await loading.present();
  }
  /**
   * Close modal
   */
  closeModal() {
    this.modalController.dismiss();
  }
}
