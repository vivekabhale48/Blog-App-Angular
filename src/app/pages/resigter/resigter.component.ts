import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resigter',
  templateUrl: './resigter.component.html',
  styleUrls: ['./resigter.component.css']
})
export class ResigterComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.RegisterForm = this.fb.group({
      'name': [''],
      'email': [''],
      'password': [''],

    })
  }

  ngOnInit(): void {
  }

  submitted() {
    console.log(this.RegisterForm.value.email);
    console.log(this.RegisterForm.value.password);
    const data = {
      name: this.RegisterForm.value.name,
      email: this.RegisterForm.value.email,
      password: this.RegisterForm.value.password
    }

    this.authService.register(data).subscribe((result:any) => {
      console.log(result.message);
      console.log(result.token);
      
      if(result.success){
        this.router.navigate(['/login'])
      }
      else{
        alert(result.message);
      }
    },
      (err) => {
        console.log(err);
      })
  }

}
