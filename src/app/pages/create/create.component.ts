import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  constructor(private fb:FormBuilder, private helloService: HelloService) {
    this.createForm = this.fb.group({
      'name': [''],
      'about': [''],
      'date': ['']
    })
   }

  alert: boolean = false;

  ngOnInit(): void {
  }

  reset(){
    this.createForm.reset();

  }
  
  save(){
    // console.log(this.createForm.value);
    const data = this.createForm.value;
    //Save it to the database
    console.log(data);
    
    this.helloService.addUser(data).subscribe((result)=>{
      console.warn(result);
      this.alert = true;
    })

  }

}
