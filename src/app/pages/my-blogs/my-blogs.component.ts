import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {


  Todos:any[]=[];
  constructor(private helloService : HelloService,private authService: AuthService) { }

  
 

  BloggersInfo: any[] = [];

  ngOnInit(): void {
    
    this.getTodos();
    this.getAllBloggers();
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
    this.authService.MyBloggerInfo().subscribe(
      (data:any)=>{
        this.BloggersInfo = data.blogs;
        console.log(this.BloggersInfo);
        // console.log(data.blogs);
      },
      err =>{
        console.log(err);
      }
    )
  }


  // getTodos(){

  //   this.helloService.getAllTodos().subscribe(
  //     (data:any) => { 

  //       console.log(data.data[0]?.authorDetail?._id)
  //       this.Todos = data.data;
  //       console.log(this.Todos);
  //       // console.log(this.Todos[0]?.authorDetail?._id)
  //     },
  //     err => { console.log(err) })
  // }
}
