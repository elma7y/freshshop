import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationBuilder,
} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        animate(
          '2s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 0.5 }),
            style({ opacity: 0, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('offerList') offerList!: ElementRef;
  constructor(private animationBuilder: AnimationBuilder) {}
  ngOnInit() {
    const factory = this.animationBuilder.build([
      animate(
        '2s',
        keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]);

    const player = factory.create(this.offerList.nativeElement);

    player.onDone(() => {
      player.destroy();
      this.ngOnInit(); // Restart the animation
    });

    player.play();
  }
  offers: string[] = [
    '20% off Entire Purchase Promo code: offT80',
    'Another offer',
    'Yet another offer',
    // Add more offers here
  ];
}
