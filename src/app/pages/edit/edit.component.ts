import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  alert: boolean = false;
  nameTask: string = '';
  aboutTask: string = '';
  
  
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
};

  editForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private activatedRouter: ActivatedRoute,
    public helloService: HelloService
    ) 

    {
    this.editForm = this.fb.group({
      'name': [''],
      'about': [''],
      'date': ['']
    })
   
   }

   Todofordisplay:any[] = [];
   content:string =this.aboutTask;
   
   findId: any;


  ngOnInit(): void {
    // this.getData(); 
    this.findId = this.activatedRouter.params;
    // console.log(this.findId._value.id);

    this.helloService.getOneUser(this.findId._value.id).subscribe(
      (result:any)=>{
      // console.log("result :", result);
      this.Todofordisplay = result.data;
      // console.log(this.Todofordisplay);
      this.accessTodo();
      
    })

  }

  afterSubmit(){
    console.warn(this.editForm.value);
    this.helloService.updateUser(this.findId._value.id,this.editForm.value).subscribe((result)=>{
      console.log(result);
      this.alert = true;
    })
  }

  accessTodo(){
    this.Todofordisplay.forEach(element => {
      this.nameTask = element.name
      // console.log(this.nameTask);
      this.aboutTask = element.about;
      this.editForm.get('about')?.setValue(this.aboutTask)
    });
  }

  closeAlert(){
    this.alert = false;   
  }

  



  // getData(){
  //   const id = this.activatedRouter.snapshot.paramMap.get('id'); //In app-routing module file we have writen "edit/:id", hence we are writting get('id)
  //   // alert(id);
  //   // console.log(id);
  //   const currentIndex = parseInt(id == null ? '0': id);
  //   this.editForm.get('name')?.setValue(this.Todos[currentIndex].Name);
  //   this.editForm.get('about')?.setValue(this.Todos[currentIndex].About);
  // }

  Todos = [
    {
      
      Name: 'Todo1',
      About: 'About Todo1'
    },
    {
      
      Name: 'Todo2',
      About: 'About Todo2'
    },
    {
    
      Name: 'Todo3',
      About: 'About Todo3'
    },
    {
    
      Name: 'Todo4',
      About: 'About Todo4'
    }
  ]

  update(){

  }
}
