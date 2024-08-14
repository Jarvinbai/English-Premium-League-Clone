import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-links',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './auth-links.component.html',
  styleUrl: './auth-links.component.css'
})
export class AuthLinksComponent {

}
