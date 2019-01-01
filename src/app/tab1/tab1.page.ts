import { Component } from '@angular/core';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  todos: any[] = [
    {
      title: "Douglas  Pace",
      subtitle: "Douglas  Pace",
      task: "Douglas  Pace",
      done: false
    },
    {
      title: "Douglas  Pace",
      subtitle: "Douglas  Pace",
      task: "Douglas  Pace",
      done: true
    }
  ];
}
