import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoCreateComponent } from './component/todo/todo-create/todo-create.component';
import { TodoListComponent } from './component/todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoCreateComponent,TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
