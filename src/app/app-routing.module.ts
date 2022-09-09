import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { CommentComponent } from './pages/comment/comment.component';
import { ResigterComponent } from './pages/resigter/resigter.component';
import { FrontComponent } from "./pages/front/front.component";
import { AuthGuard } from './guards/auth.guard';
import { MyBlogsComponent } from './pages/my-blogs/my-blogs.component';
// import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full' },

  {
    path:'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit/:id', 
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'comment/:id',
    component: CommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'myBlogs', 
    component: MyBlogsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'front', 
    component: FrontComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'create', 
    component: CreateComponent,
    canActivate: [AuthGuard]},
  {
    path:'login', 
    component: LoginComponent,
    },
  {
    path:'regist', 
    component: ResigterComponent,
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
