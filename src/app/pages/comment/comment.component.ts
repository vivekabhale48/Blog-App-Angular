import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private helloService : HelloService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getTodos();
    this.getOneTodo();
  }

  Blogs:any[]=[];
  newBlog:any[]=[];

  findId: any;

  getOneTodo(){
  this.findId = this.activatedRouter.params;
    // console.log(this.findId._value.id);

    this.helloService.getOneUser(this.findId._value.id).subscribe(
      (result:any)=>{
      // console.log("result :", result);
      this.Blogs = result.data;
      console.log(this.Blogs);
      this.onemoreArray();
      })
  }

  onemoreArray(){
    this.Blogs.forEach(element => {
      this.newBlog = element;
      console.log(this.newBlog);
    });
  }
  // getTodos(){
  //   this.helloService.getAllTodos().subscribe(
  //     (data:any) => { 

  //       // console.log(data.data)
  //       this.Blogs = data.data;
  //       console.log(this.Blogs[0].comments[0].comment);
        
  //     },
  //     err => { console.log(err) })
  // }


  PostComment(id: any, blog: any) {

    this.helloService.comment(id, blog.tempComment).subscribe(

      (data: any) => {
        console.log(data);
        this.Blogs.forEach((blog) => {
          if (blog._id === id) {
            blog.comments = data.blog.comments;
          }
        });
      },
      (err) => {}
    );
  }
// 
}
