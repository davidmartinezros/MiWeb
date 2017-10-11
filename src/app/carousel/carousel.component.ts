import { Component, OnInit } from '@angular/core';

import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public imageSources: string[] = [
    'assets/carousel/foto1.jpg',
    'assets/carousel/foto2.jpg',
    'assets/carousel/foto3.jpg',
    'assets/carousel/foto4.jpg',
    'assets/carousel/foto5.jpg'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.APPEAR,
   autoplay: true,
   autoplayDelay: 5000,
   stopAutoplayMinWidth: 768
 };

  constructor() { }

  ngOnInit() {
  }

}
