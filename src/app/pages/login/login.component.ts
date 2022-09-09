import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      'email': [''],
      'password': [''],
    })
  }

  loginError = false;

  loading = false;

  ngOnInit(): void {
    // console.log(this.userpassword,this.useremail)

  }

  submitted() {
    // console.log(this.loginForm.value.email);
    // console.log(this.loginForm.value.password);
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.login(data).subscribe((result:any) => {
      this.loginError = false;
      this.loading = true;
      
      // console.log(result.message);
      // console.log(result.token);
      localStorage.setItem('tokenns',result.token)
      if(result.success){
        
        this.router.navigate(['/front'])
        
      }
      else{
        this.loginError = true;
      }
    },
      (err) => {
        console.log(err);
      },()=>{
        this.loading= false;
      })
  }
}
