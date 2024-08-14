import { CommonModule , DOCUMENT} from '@angular/common';
import { Component , Inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
