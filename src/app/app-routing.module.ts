import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TreeComponent} from "./tree/tree.component";

const routes: Routes = [
  {
    path: 'workflow-designer',
    component: TreeComponent,
  },
  { path: '**', redirectTo: 'workflow-designer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
