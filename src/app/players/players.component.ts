import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../shared/slider/slider.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,SliderComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players: any[] = [];
  filteredClubs: any[] = [];
  clubs:string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.http.get<any[]>('assets/players.json').subscribe({
      next: (data) => {
        this.players = data;
        this.filteredClubs = data;
        this. getClubs()
      },
      error: (err) => {
        console.error('Error fetching players:', err);
      }
    });
  }

  getClubs(){
    this.clubs = this.players.map((club)=>{return club.clubName})
    console.log(this.clubs)
    let uniqueClubs = new Set(this.clubs)
    console.log(uniqueClubs)
    this.clubs = [...uniqueClubs]
    console.log(this.clubs)
  }

  filterClubs(clubs: string) {
    this.filteredClubs = this.players.filter(player=>player.clubName===clubs)
  }
}
