import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  @ViewChild('topBtn', { static: true }) toTop!: ElementRef;

  routing!: string;
  constructor(private route: Router) {}
  ngDoCheck(): void {
    this.scrolling();
    this.routing = this.route.url.slice(1);
    if (this.route.url == '/home') {
      this.routing = '';
    }
  }
  scrolling() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.toTop.nativeElement.style.display = 'block';
    } else {
      this.toTop.nativeElement.style.display = 'none';
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
