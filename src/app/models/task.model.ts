export interface Task {
  id: string;
  userId: string;
  title: string;
  task: string;
  detail: string;
  created: Date;
  done: boolean;
}
