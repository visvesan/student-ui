import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './component/add-book/add-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user/:userId',
      component: UserComponent, children: [
      { path: 'addbook', component: AddBookComponent },
      { path: 'deletebook', component: DeleteBookComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
