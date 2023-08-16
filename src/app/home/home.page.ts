import { Component, ElementRef, ViewChild } from '@angular/core';

import { Swiper } from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  @ViewChild('swiper')
  swiperRef:ElementRef | undefined;
  swiper?: Swiper;
  swiperModules = [IonicSlides];
  
  constructor() {}

}
