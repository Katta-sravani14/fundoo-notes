import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  {
   
        path: 'register',
        component : RegisterComponent
    
      },
     
      {
        path: 'login',
        component : LoginComponent
      },
      {
        path: 'resetpassword/:token',
        component: ResetpasswordComponent
      },
      {

        path: 'forgot',
        component: ForgotpasswordComponent
      },
      {
        
        path : "",
        redirectTo: "login",
        pathMatch: "full"
     
    },
    {
      path: 'dashboard',
      component : DashboardComponent
    },
    {
      path: 'display',
      component : DisplayComponent
    },
    ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
