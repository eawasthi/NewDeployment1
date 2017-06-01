import { UsersService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { MainpageComponent } from './users/mainpage/mainpage.component';
import { PlaypageComponent } from './users/playpage/playpage.component';
import { AddquestionpageComponent } from './users/addquestionpage/addquestionpage.component';
import { SuccessComponent } from './users/success/success.component';
import { HomeComponent } from './users/home/home.component';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    MainpageComponent,
    PlaypageComponent,
    AddquestionpageComponent,
    SuccessComponent,
    HomeComponent,
    NameFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
