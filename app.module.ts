import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

import { FundooheaderComponent } from './fundooheader/fundooheader.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { TrashComponent } from './components/trash/trash.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FundooheaderComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    DisplayComponent,
    CreateNoteComponent,
    SidenavbarComponent,
    GetallnoteComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
