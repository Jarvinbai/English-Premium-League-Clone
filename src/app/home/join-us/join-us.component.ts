import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule,HeadingComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {

}
