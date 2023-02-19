import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  // {path: "/", redirectTo:"", pathMatch: 'full'},
  {path:"api",component: ApiComponent},
  // {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
