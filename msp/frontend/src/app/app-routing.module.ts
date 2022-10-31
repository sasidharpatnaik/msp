import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord.component';
import { HomeComponent } from './components/home.component';
import { ListCandidatesComponent } from './components/list-candidates.component';
import { LoginComponent } from './components/login.component';
import { SidebarTestComponent } from './components/sidebar-test.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'dashbord', component:DashbordComponent},
  {path:'candidates', component:ListCandidatesComponent},
  {path:'sidebar', component:SidebarTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
