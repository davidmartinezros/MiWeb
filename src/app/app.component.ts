import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FollowingComponent } from './following/following.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Title, Meta, MetaDefinition }  from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  private language: String;
  
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title) {
      debugger;

      var userLang = "";
      this.route.queryParams.subscribe(params => {
        userLang = params['lang'];
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
    /*
    this.translate.get("TagAuthorIndex").subscribe(
      key => {
        this.meta.updateTag(key);
      }
    );
    this.translate.get("TagKeywordsIndex").subscribe(
      key => {
        this.meta.updateTag(key);
      }
    );
    this.translate.get("TagDescriptionIndex").subscribe(
      key => {
        this.meta.updateTag(key);
      }
    );
    */
    DashboardComponent.updateStuff.next(false);
    ProjectListComponent.updateStuff.next(false);
    FollowingComponent.updateStuff.next(false);
    ProjectsComponent.updateStuff.next(false);
    ProjectDetailComponent.updateStuff.next(false);
    CarouselComponent.updateStuff.next(false);

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