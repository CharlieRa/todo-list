import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./auth/login/login.module#LoginPageModule" },
  { path: "tabs", loadChildren: "./tabs/tabs.module#TabsPageModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
