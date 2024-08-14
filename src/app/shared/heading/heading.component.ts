import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input('subHeading')
  subHeading = '';

  @Input('headingText1')
  headingText1 = '';

  @Input('headingText2')
  headingText2 = '';

  @Input('headingText3')
  headingText3 = '';

  @Input('specialHeadingID')
  specialHeadingID = 2;

  @Input('align')
  align = 'C'; // C,L
}
