import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSmallMenu = false
  isOnTop = false
  isScrollHalf = false
  isMenuOpen = false
  isMenuClosen = true

  menuOpener() {
    if (this.isMenuOpen) document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    if (this.isMenuClosen) document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    this.isMenuOpen = !this.isMenuOpen
    this.isMenuClosen = !this.isMenuClosen
  }

  addAnimetion = () => {
    setTimeout(()=>{
      if (window.scrollY <= 50)
      window.scrollTo(0, window.innerHeight)
    }, 1500)
  }


  ngOnInit() {
    window.addEventListener('scroll', ()=> {
      if (window.innerHeight * 0.6 <= window.scrollY) {
        this.isOnTop = true
      } else {
        this.isOnTop = false
      }
      if (window.innerHeight * 0.4 <= window.scrollY) {
        this.isScrollHalf = true
      } else {
        this.isScrollHalf = false
      }
      if (window.innerHeight * 0.92 <= window.scrollY) {
        this.isSmallMenu = true
      } else {
        this.isSmallMenu = false
      }
    })

    const toNews = document.getElementById('toNews');
    const toAbout = document.getElementById('toAbout');

    toNews?.addEventListener('click', () => this.addAnimetion())
    toAbout?.addEventListener('click', () => this.addAnimetion())

    this.addAnimetion()
  }
}
