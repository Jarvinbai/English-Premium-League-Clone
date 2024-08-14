import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { VideoPopupComponent } from '../../shared/video-popup/video-popup.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { HttpClient } from '@angular/common/http';
import { SlideConfig } from '../../models/slide-config.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,ButtonComponent,VideoPopupComponent,SliderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  players: any[] = [];
  canShowVideo = false;

  slideConfig = new SlideConfig();


  constructor(private http: HttpClient) {}
  
  currentIndex = 0;
  slides = [
    {
      image: '../../assets/static_7.jpg',
    },
    {
      image:
        '../../assets/static_1.jpg',
    },
    {
      image:
        '../../assets/static_3.jpg',
    },
    {
      image:
        '../../assets/static_5.jpg',
    },
  ];


  ngOnInit(): void {
    this.slideConfig.breakpoints = { sm: 1, md: 2, lg: 4, xl: 4 }
    this.slideConfig.showLeftRightArrow = false;
    this.slideConfig.showDots = true;
    this.slideConfig.autoPlay = true;
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.http.get<any[]>('assets/players.json').subscribe({
      next: (data) => {
        this.players = data;
      },
      error: (err) => {
        console.error('Error fetching players:', err);
      }
    });
  }

  
 
  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }
 
  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }
}
