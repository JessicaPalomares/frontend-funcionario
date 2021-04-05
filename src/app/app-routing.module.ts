import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { Home1Component } from './views/home1/home1.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './account/login/login.component'
import {CreateAccountComponent} from './account/create-account/create-account.component'

import {HomeComponent} from "./views/home/home.component";

import {FuncionarioCrudComponent} from "./views/funcionario-crud/funcionario-crud.component";
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {path:'', component: FuncionarioCrudComponent},
      {path:'funcionario/create', component: FuncionarioCreateComponent},
      {path:'funcionario/update/:id', component: FuncionarioUpdateComponent}

    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component:AuthenticationComponent,
    children:[
      {path: '', redirectTo:'login', pathMatch:'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent}

    ]


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
