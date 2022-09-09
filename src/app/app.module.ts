import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ResigterComponent } from './pages/resigter/resigter.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { MyBlogsComponent } from './pages/my-blogs/my-blogs.component';
import { CommentComponent } from './pages/comment/comment.component';
import { FrontComponent } from './pages/front/front.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditComponent,
    CreateComponent,
    LoginComponent,
    ResigterComponent,
    MyBlogsComponent,
    CommentComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ApiInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
