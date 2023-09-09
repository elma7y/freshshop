import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
    nav: false,
  };
  slidesStore: any[] = [
    { id: '1', src: '../../../assets/images/footer/instagram-img-01.jpg' },
    { id: '2', src: '../../../assets/images/footer/instagram-img-02.jpg' },
    { id: '3', src: '../../../assets/images/footer/instagram-img-03.jpg' },
    { id: '4', src: '../../../assets/images/footer/instagram-img-04.jpg' },
    { id: '5', src: '../../../assets/images/footer/instagram-img-05.jpg' },
    { id: '6', src: '../../../assets/images/footer/instagram-img-06.jpg' },
    { id: '7', src: '../../../assets/images/footer/instagram-img-07.jpg' },
    { id: '8', src: '../../../assets/images/footer/instagram-img-08.jpg' },
    { id: '9', src: '../../../assets/images/footer/instagram-img-09.jpg' },
  ];
}
