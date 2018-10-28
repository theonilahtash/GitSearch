import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { GitComponent } from '../git/git.component';
import { UserComponent } from '../user/user.component';

// Defining routes
const routes: Routes = [
  {path: 'git', component: GitComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
