import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { IjaraContComponent } from './ijaracont/ijaracont.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 {path:'home', component:HomeComponent},
  { path: 'main', component: AppMainComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'business', component: IjaraContComponent },
  { path: 'admin', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
