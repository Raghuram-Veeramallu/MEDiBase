
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { OlduserComponent } from './olduser/olduser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login.component';
//import { NotFoundComponent } from '../home/views/errors/not-found/not-found.component';

const loginRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path:'',
                redirectTo: 'olduser',
                pathMatch: 'full' 
            },
            {
                path:'olduser',
                component: OlduserComponent
            },
            {
                path:'newuser',
                component: NewuserComponent
            },
            //{ path: '**', component: NotFoundComponent }
        ]
    }
];


@NgModule({
    imports: [
      RouterModule.forChild(loginRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class LoginRoutingModule {}
