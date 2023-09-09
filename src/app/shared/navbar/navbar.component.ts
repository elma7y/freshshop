import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarCollapsed = true;
  margin: string = '';
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
    if (this.navbarCollapsed) {
      this.margin = '';
    } else {
      this.margin = 'margin';
    }
  }
}
