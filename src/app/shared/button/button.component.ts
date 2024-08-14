import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input('size')
  size = 'S' // S,M,L
  @Input('shade')
  shade = 'NA' // D,L,W,NA
  @Input('animation')
  animation = 'F' // C,F,NA
  @Input('name')
  name = ''
}
