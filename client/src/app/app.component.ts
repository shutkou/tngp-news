import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToniNews';

  isOnTop = false

    ngOnInit() {
      window.addEventListener('scroll', ()=> {
        if (window.innerHeight * 0.92 <= window.scrollY) {
          this.isOnTop = true
        } else {
          this.isOnTop = false
        }
      })
    }
}
