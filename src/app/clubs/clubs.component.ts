import { Component ,AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements AfterViewInit{

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');

      if (registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
          container?.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
          container?.classList.remove("active");
        });
      }
    }
  }

  toggleForms() {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('container');
      container?.classList.toggle('active');
    }
  }

}
