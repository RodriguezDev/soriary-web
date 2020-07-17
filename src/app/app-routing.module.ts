import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  // { path: '**', component: LoginScreenComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: NavBarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
