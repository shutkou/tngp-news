import { Component, createNgModule, inject } from '@angular/core';
import { BaseService } from '../../data/serveces/base.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  baseService = inject(BaseService)

  aboutCols = this.baseService.aboutBase

  sliderImages = this.baseService.sliderAboutImages

  reasensBase = this.baseService.reasensBase
  reasensBaseL = Math.ceil(this.reasensBase.length/2)

  zeroScroll() {
   const scrollingBox = document.getElementById('scrollBox')
   const box = document.getElementById('aboutScrollBar')
   setTimeout(()=>{
    box!.scrollTo(scrollingBox!.clientWidth, 0);
  }, 0)
  }

  swipeImg(k: number) {
    const scrollBox = document.getElementById('scrollBox');
    const boxe = document.getElementById('aboutScrollBar');
    const liLength = boxe!.getElementsByTagName('li').length;
    const width = scrollBox!.clientWidth;

    let scrollNow: number = Math.ceil(boxe!.scrollLeft);
    let isLast = Math.abs(scrollNow - (6 * width)) < 10;

    setTimeout(()=> {
      if (scrollNow === 0 && k === -1) {
        boxe?.classList.add('scroll-auto')
        boxe!.scrollTo((liLength - 2) * width, 0);
        boxe?.classList.remove('scroll-auto')
        scrollNow = (liLength - 2) * width
        scrollNow += k * width
        boxe!.scrollTo(scrollNow, 0)
        // console.log('last')
      } else if (isLast && k === 1) {
        // console.log('first')
        boxe?.classList.add('scroll-auto')
        boxe!.scrollTo(width, 0);
        boxe?.classList.remove('scroll-auto')
        scrollNow = width
        scrollNow += k * width
        boxe!.scrollTo(scrollNow, 0)
      } else {
        // console.log((isLast) + '  ' + scrollNow + "   " + width + '   ' + (width * 6))
        scrollNow += k * width
        boxe!.scrollTo(scrollNow, 0)
      }
    }, 1)
  }

  ngOnInit() {
    this.zeroScroll()
  }
}
