import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import {PublicComponent} from './public.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {
    path:'public',
    component:PublicComponent,
    children:[
      {
        path:'allbooks',component:AllbooksComponent
      },
      {
        path:'bookdetails/:id',
        component:BookDetailsComponent
      },
      {
        path:'bookdetails/:id/author/:authorId',
        component:BookDetailsComponent
      },
      {
        path:'bookdetails',component:BookDetailsComponent
      }
    ] }
]


@NgModule({
  declarations: [],
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
