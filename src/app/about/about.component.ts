import { Component } from '@angular/core';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  host: {
      class:'content'
  }
})
export class AboutComponent  {
}
