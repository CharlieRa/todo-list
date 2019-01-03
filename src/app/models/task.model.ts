export class Task {
  id: Number;
  title: string;
  task: string;
  detail: string;
  done: boolean;
  constructor(
    id: Number,
    title: string,
    task: string,
    detail: string,
    done: boolean
  ) {
    this.id = id;
    this.title = title;
    this.task = task;
    this.detail = detail;
    this.done = done;
  }
}
