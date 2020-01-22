import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [{
  path:'welcome',
  component: HeaderComponent
},
{
  path:'registration',
  component: RegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
