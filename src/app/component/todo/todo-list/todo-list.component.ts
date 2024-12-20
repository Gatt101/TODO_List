import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { FormGroup } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoCreateComponent,NgFor,MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public todos: Todo[] = [];

  ngOnInit():void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
recieveEvent(eventval:Todo){
    this.todos.push(eventval);
    console.log(this.todos);
  }
  public deleteTask(index:number): void {
    this.todos.splice(index, 1);
}
}
