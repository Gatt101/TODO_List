import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { TodoListComponent } from './component/todo/todo-list/todo-list.component';


export const routes: Routes = [
    {
        path:'',redirectTo:'todo-list',pathMatch:'full',
    },
    {
        path:'todo-list',component:TodoListComponent
    },
    {path:'about',component:AboutComponent},
    {path:'services',component:ServicesComponent}
];
