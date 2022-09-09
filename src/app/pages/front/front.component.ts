import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private authService: AuthService) { }

  FindName:any;

  BloggersInfo: any[] = [];


  ngOnInit(): void {
    this.getAllBloggers();
  }

  getAllBloggers(){
    this.authService.MyBloggerInfo().subscribe(
      (data:any)=>{
        this.BloggersInfo = data.blogs;
        console.log(this.BloggersInfo);
        // console.log(data.blogs);
        this.BloggersName();
      },
      err =>{
        console.log(err);
      }
    )
  }

  BloggersName(){
    this.BloggersInfo.forEach(element => {
      this.FindName=element.authorDetail.name;
      console.log(this.FindName);
    }
    );
  }


}
