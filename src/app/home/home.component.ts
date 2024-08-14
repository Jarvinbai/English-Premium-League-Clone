import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NewImageComponent } from './new-image/new-image.component';
import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroComponent,ButtonComponent,JoinUsComponent,NewImageComponent,PhotosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  test(){
    console.log("test");
  }
}
