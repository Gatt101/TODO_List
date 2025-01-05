import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass,RouterLink,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink:'todo-list',
      icon: 'fas fa-home',
      label:'Home',
    },
    {
      routeLink:'about',
      icon: 'fas fa-box-open',
      label:'About',
    },
    {
      routeLink:'services',
      icon: 'fas fa-file',
      label:'Services',
    }
    
  ]
  toogleCollapsed() {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  closedSidebar() {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}
