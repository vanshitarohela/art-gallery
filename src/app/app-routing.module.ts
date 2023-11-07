import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { WelcomeCompComponent } from './welcome-comp/welcome-comp.component';
import { FavsComponent } from './favs/favs.component';


const routes: Routes = [
  {
    path:"",
    component:WelcomeCompComponent
  },
  {
    path:"gridView",
    component:HomeCompComponent
  },{
    path:"detailView/:id",
    component:DetailViewComponent
  },{
    path:"favourite",
    component:FavsComponent
  },{
    path:"search",
    component:GridViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
