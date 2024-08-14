import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'news',component:NewsComponent},
    {path:'clubs',component:ClubsComponent},
    {path:'players',component:PlayersComponent}
];
