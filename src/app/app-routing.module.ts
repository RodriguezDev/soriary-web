import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {HomeScreenComponent} from "./home-screen/home-screen.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: HomeScreenComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
