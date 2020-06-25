import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchComponent } from './components/search/search.component';
import { TopratedComponent } from './components/toprated/toprated.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'toprated', component: TopratedComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }