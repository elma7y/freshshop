import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements DoCheck {
  ngDoCheck(): void {
    this.fixedNav();
  }
  @ViewChild('fixedNav', { static: true }) fixedNavbar!: ElementRef;
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
  fixedNav() {
    if (window.scrollY > 60) {
      this.fixedNavbar.nativeElement.classList.add('fixed');
    } else {
      this.fixedNavbar.nativeElement.classList.remove('fixed');
    }
  }
}
