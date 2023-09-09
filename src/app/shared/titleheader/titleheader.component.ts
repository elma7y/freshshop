import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titleheader',
  templateUrl: './titleheader.component.html',
  styleUrls: ['./titleheader.component.scss'],
})
export class TitleheaderComponent {
  @Input() routing!: string;
}
