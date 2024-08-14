import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { PhoneComponent } from '../phone/phone.component';
import { RouterModule } from '@angular/router';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule,EmailComponent,PhoneComponent,SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
