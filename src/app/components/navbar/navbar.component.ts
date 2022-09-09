import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelloService } from 'src/app/services/hello.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  BlogList:any[]=this.helloService.Blog;
  
  // navlogin:boolean = false;
  constructor(private router : Router, private authService: AuthService, private helloService: HelloService) {
    
   }

 
   loggedIn =false;

  ngOnInit(): void {
    
    // console.log(this.authService.loginSuccess);
    // if(this.authService.getToken()){
    //   this.navlogin = true;
    // }
    // else{
    //   this.navlogin = false;
    // }
   

    this.authService.notifyLogin$.subscribe(data=>{
      this.loggedIn= !!this.authService.getToken();
      this.loggedIn = true;
    })

  }

  logout(){
    localStorage.removeItem('tokenns')
    this.router.navigate(['/login']);
    this.loggedIn=false;
  }

  check1(){
    console.log(localStorage.getItem('tokenns'))

    if(localStorage.getItem('tokenns') === 'undefined'){
      this.router.navigate(['/login']);
      this.loggedIn=false;
    }
    else{
      this.router.navigate(['/home']);
     
    }
  }

  check2(){
    console.log(localStorage.getItem('tokenns'))

    if(localStorage.getItem('tokenns') === 'undefined'){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/create']);
    }
  }
}
