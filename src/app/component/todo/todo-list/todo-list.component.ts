import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,  // To allow Angular to compile this component in AOT mode
  imports:[FormsModule,NgFor,ReactiveFormsModule]
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    { task: 'Task 1', time: '10:00', completed: true},
    { task: 'Task 2', time: '11:00', completed: false},
  ];

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) 
  {
    this.userForm = this.initializeForm();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // set local storage save 
    if( typeof localStorage!== 'undefined'){
    let newTasks = JSON.parse(localStorage.getItem('todos') || '[]');
    if (newTasks) {
      this.todos = newTasks;
    }
    }
  }
  private initializeForm(): FormGroup {
    return this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(1)]],
      time: ['', [Validators.required]],
      completed: [false],
    });
  }



  submitTask(): void {
    if (this.userForm.valid) {
      const newTask = this.userForm.value;
      if (newTask.task.trim().length > 0) {
        this.todos.push(newTask);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.userForm.reset();
        this.userForm = this.initializeForm();
      }
    }
  }

  toggleDone(item:Todo): void {
    item.completed = !item.completed;
  }

  deleteTask(index: number): void {
    this.todos.splice(index, 1);
  }
}
