import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewrideComponent } from './newride/newride.component';
import { PickrideComponent } from './pickride/pickride.component';

const routes: Routes = [
  { path : "addride", component: NewrideComponent},
  {path : "pickride" , component : PickrideComponent},
  {path : '', redirectTo: '/pickride', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
