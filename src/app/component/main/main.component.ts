import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 
{
  isLeftSidebarCollapsed = input.required<Boolean>();
  screenWidth = input.required<number>();
 
  sizeClass = computed(() => {
   const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
   if(isLeftSidebarCollapsed){
     return '';
   }
   return this.screenWidth() > 768? 'body-trimmed' : 'body-md-screen';
  })
}