import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClubsListComponent } from './shared/clubs-list/clubs-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,MenuComponent,AuthLinksComponent,SocialLinksComponent,EmailComponent,PhoneComponent,FooterComponent,ClubsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isMenuScrolled = false;
  isSidebarShowing = false;
  @HostListener('window:scroll', ['$event'])
  scrollCheck(){
    if(window.pageYOffset > 100){
      this.isMenuScrolled = true;
    }
    else{
      this.isMenuScrolled = false;
    }

    console.log(this.isMenuScrolled);
  }

  openSideBar(){
    this.isSidebarShowing = true;
  }

  closeSideBar(){
    this.isSidebarShowing = false;
  }

  scrollToTop(){
    document.body.scrollIntoView({behavior:'smooth'})
  }
}
