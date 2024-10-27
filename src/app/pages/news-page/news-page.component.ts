import { Component, inject } from '@angular/core';
import { BackgroundComponent } from "../../data/background/background.component";
import { BaseService } from '../../data/serveces/base.service';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  newsBase = inject(BaseService).newsInform
  isHideDArkBlock = true
  bools = Array(5).fill(true)

    changeBool = (n: number) => {
      const buttons = document.getElementsByClassName('textButton');
      const textBoxes = document.getElementsByClassName('textBox');
      const h = textBoxes[n].scrollHeight;

      const hBasic = window.innerWidth > 1440 ? 100 : window.innerWidth > 968 ? 92 : window.innerWidth > 768 ? 84 : window.innerWidth > 520 ? 72 : 68;

      if (buttons[n].innerHTML === 'Скрыть') {
        buttons[n].innerHTML = 'Дальше..';
        //@ts-ignore
        textBoxes[n].style.height = hBasic + 'px';
      } else {
        buttons[n].innerHTML = 'Скрыть';
        //@ts-ignore
        textBoxes[n].style.height = h + 'px';
      }
    }



    zoomImg(n: number, i: number) {
      this.bools[n] = false;
      this.isHideDArkBlock = false;
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

      const boxes = document.getElementsByClassName('no-scrollbar');
      setTimeout(()=>{
        boxes[n].scrollTo(window.innerWidth * (i - 0.3), 0);
      }, 0)
    }

    swipeImg(n: number, k: number) {
      const boxes = document.getElementsByClassName('no-scrollbar');
      const liLength = boxes[n].getElementsByTagName('li').length;

      let scrollNow: number = boxes[n].scrollLeft;
      setTimeout(()=>{
        if ((scrollNow !== (liLength - 1) * window.innerWidth && k === 1) || (scrollNow !== 0 && k === -1)) scrollNow += k * window.innerWidth;
        boxes[n].scrollTo(scrollNow, 0);
      }, 0)
    }

    hideZoom(event: Event):void {
      let elementId: string = (event.target as Element).id;
      if(elementId === 'dark' || elementId === 'closeButton') {
        this.bools = Array(document.getElementsByClassName('no-scrollbar').length).fill(true);
        this.isHideDArkBlock = true;
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
      }
    }
}
