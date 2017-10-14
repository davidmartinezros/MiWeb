import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { TranslateService } from '@ngx-translate/core';

import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public carouselOne: NgxCarousel;

  public carousel: any;

  public static updateStuff: Subject<any> = new Subject();

  constructor(private translate: TranslateService) {

    CarouselComponent.updateStuff.subscribe(res => {
      // here fire functions that fetch the data from the api
      this.getCarousel();
    });

  }
  
  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
    
    this.getCarousel();

  }

  getCarousel() {
    this.translate.get("carousel")
      .toPromise()
      .then(carousel => 
        { this.carousel = carousel }
      );

  }

  gotoCarousel(url) {
    window.open(url);
  }
  
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

}
