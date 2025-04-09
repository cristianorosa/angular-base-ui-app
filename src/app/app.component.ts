import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { SidenavComponent } from "./core/layout/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'attendance-ui';

  isActive = false;
  isMobileView = false;

  sidenavOpen = false;
  
  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
  
  closeSidenavOnOutsideClick(): void {
    if (this.isMobile()) {
      this.sidenavOpen = false;
    }
  }
  
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
  
  @HostListener('window:resize')
  onResize(): void {
    if (!this.isMobile()) {
      this.sidenavOpen = false;
    }
  }
}
