import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PopularComponent} from './components/popular/popular.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'popular', component: PopularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
