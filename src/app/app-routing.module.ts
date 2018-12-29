import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { BoxinComponent } from './components/boxin/boxin.component';
import { StartComponent } from './components/start/start.component';
import { ReportComponent } from './components/report/report.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path : '', component:HomeComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path : 'Login', component:LoginComponent},
  {path : 'Home',component:HomeComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path : 'Boxin',component:BoxinComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path : 'Start', component:StartComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path : 'Report', component:ReportComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path : 'Search',component:SearchComponent,pathMatch:'full',canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
