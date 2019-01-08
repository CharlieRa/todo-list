import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { NewTodoModal } from "./new-todo-modal/new-todo-modal.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page, NewTodoModal],
  entryComponents: [Tab1Page, NewTodoModal]
})
export class Tab1PageModule {}
