import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: 'reset',
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
    ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
