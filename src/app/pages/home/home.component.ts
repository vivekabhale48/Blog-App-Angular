import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public helloService: HelloService,private authService: AuthService) { }

  Todos:any[] = [];

  BloggersInfo: any[] = [];

  commentLength:any;

  ngOnInit(): void {

    this.getTodos();
    // this.getAllBloggers();
    // console.log(this.authService.loginSuccess); 
    
  }

  
  getTodos(){
    this.helloService.getAllTodos().subscribe(
      (data:any) => { 

        // console.log(data.data)
        this.Todos = data.data;
        console.log(this.Todos);
        this.helloService.Blog = this.Todos;
      },
      err => { console.log(err) })
  }

  deleteItem(id: number){
    // console.log(id);
    this.helloService.deleteUser(id).subscribe((result)=>{
      console.warn(result);
      this.getTodos();
    });  
  }

  getAllBloggers(){
    this.authService.BloggerInfo().subscribe(
      (data:any)=>{
        this.BloggersInfo = data.data;
        console.log(this.BloggersInfo);
      },
      err =>{
        console.log(err);
      }
    )
  }

  // Todos = [
  //   {

  //     Name: 'Todo1',
  //     About: 'About Todo1'
  //   },
  //   {

  //     Name: 'Todo2',
  //     About: 'About Todo2'
  //   },
  //   {

  //     Name: 'Todo3',
  //     About: 'About Todo3'
  //   },
  //   {

  //     Name: 'Todo4',
  //     About: 'About Todo4'
  //   }
  // ]

 
}
