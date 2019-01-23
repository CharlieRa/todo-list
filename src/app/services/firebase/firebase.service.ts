import { Injectable } from "@angular/core";
import { Task } from "../../models";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  // todoList: Task[];
  todoList;

  constructor(private firestore: AngularFirestore) {}

  getTodoList(userId: string): AngularFirestoreCollection<Task> {
    return this.firestore.collection(
      `todoList`,
      ref => ref.where("userId", "==", userId)
      // .orderBy("created", "desc")
    );
  }
  /**
   *
   * @param userId
   * @param title
   * @param task
   * @param detail
   * @param created
   * @param done
   */
  addNewTodo(
    userId: string,
    title: string,
    task: string,
    detail: string,
    created = new Date(),
    done = false
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`todoList/${id}`).set({
      id,
      userId,
      title,
      task,
      detail,
      created,
      done
    });
  }
}
