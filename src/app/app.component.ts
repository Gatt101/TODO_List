import { Component, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './component/todo/todo-list/todo-list.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { isPlatformBrowser } from '@angular/common';
import { MainComponent } from './component/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  // window implementation
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLeftSidebarCollapsed.set(this.screenWidth()<768)
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  closeSidebar(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
