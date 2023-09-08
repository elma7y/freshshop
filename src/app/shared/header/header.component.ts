import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  offers: string[] = [
    '20% off Entire Purchase Promo code: offT80',
    '50% - 80% off on Vegetables',
    'Off 10%! Shop Vegetables',
    'Off 50%! Shop Now',
  ];
  auth: any[] = [];
  currency: any[] = [];
  currentIndex = 0;
  animationDuration = '2s';
  selectedValue = 'Sign In';
  selected = '¥ JPY';
  constructor() {}
  ngOnInit() {
    this.startAnimation();
    this.auth = [
      { value: 'Regiser Here', viewValue: 'Regiser Here' },
      { value: 'Sign In', viewValue: 'Sign In' },
    ];
    this.currency = [
      { value: '¥ JPY', viewValue: '¥ JPY' },
      { value: '$ USD', viewValue: '$ USD' },
      { value: '€ EUR', viewValue: '€ EUR' },
    ];
  }
  startAnimation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.offers.length;
    }, 2000); // Adjust the interval as per your preference
  }
}
