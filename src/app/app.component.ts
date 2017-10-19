import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FollowingComponent } from './following/following.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Title }  from '@angular/platform-browser';
import { MetaService } from './meta.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  private language;
  
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private metaService: MetaService) {
      debugger;

      var userLang = "";
      this.route.queryParams.subscribe(params => {
        if(!params['lang'] || params['lang'] == "") {
          userLang = this.language;
        } else {
          userLang = params['lang'];
        }
        console.log("queryParams:" + userLang);

        if(!userLang || userLang == "") {
          userLang = navigator.language;
          if(userLang.startsWith("zh")) {
            userLang = "zh";
          }
        }
        if(userLang == "es" || userLang == "en" || userLang == "zh") {
          this.changeLanguage(userLang);
        } else {
          this.changeLanguage("en");
        }
      });

      // When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("myButtonTop").style.display = "block";
          } else {
              document.getElementById("myButtonTop").style.display = "none";
          }
      };
  }

  public changeLanguage(language) {

    console.log(language);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(language);
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(language);

    this.language = language;

    this.translate.get("TitleIndex").subscribe(
      key => {
        this.title.setTitle(key);
      }
    );
    
    this.translate.get("TagAuthorIndex").subscribe(
      key => {
        this.metaService.setMeta("author", key);
      }
    );
    this.translate.get("TagKeywordsIndex").subscribe(
      key => {
        this.metaService.setMeta("keywords", key);
      }
    );
    this.translate.get("TagDescriptionIndex").subscribe(
      key => {
        this.metaService.setMeta("description", key);
      }
    );
    
    DashboardComponent.updateStuff.next(false);
    ProjectListComponent.updateStuff.next(false);
    FollowingComponent.updateStuff.next(false);
    ProjectsComponent.updateStuff.next(false);
    ProjectDetailComponent.updateStuff.next(false);
    CarouselComponent.updateStuff.next(false);

  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.route)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.title.setTitle(event['title']);
        this.metaService.setMeta('author', event['author']);
        this.metaService.setMeta('keywords', event['keywords']);
        this.metaService.setMeta('description', event['description']);
      }
      );
  }

  public showIntroductionAlert() {
    this.translate.get("IntroductionAlert").subscribe(
      key => {
        window.alert(key);
      }
    );
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }


}