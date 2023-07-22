import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewrideComponent } from './newride/newride.component';
import { PickrideComponent } from './pickride/pickride.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : "addride", component: NewrideComponent},
  {path : "pickride" , component : PickrideComponent},
  {path : "home" , component : HomeComponent},
  {path : '', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
