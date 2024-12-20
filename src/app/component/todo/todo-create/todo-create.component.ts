import { Component, Output,EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
 
   @Output() submit = new EventEmitter();
    userForm!: FormGroup ;
    constructor(private formBuilder:FormBuilder){
      this.userForm = this.formBuilder.group({
        task: ['', [Validators.required]],
        time: ['',[Validators.required]]
      })
    }
    Initialize(){
      this.userForm = this.formBuilder.group({
        task: ['', [Validators.required,length]],
        time: ['',[Validators.required]]
      })
    }


    submitTask(){
      if (this.userForm.valid) {
       var temp = this.userForm.value;
        if(temp.task.length > 0){
        this.submit.emit(this.userForm.value);
        this.userForm.reset();
        this.Initialize();
        }
      }
    }
}
