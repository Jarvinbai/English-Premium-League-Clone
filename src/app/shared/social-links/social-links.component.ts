import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoPopupComponent } from '../video-popup/video-popup.component';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule,VideoPopupComponent],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css'
})
export class SocialLinksComponent {
  canShowVideo = false;
  
  @Input('color')
  color = 'dynamic';

  @Input('align')
  align = 'center';
}
