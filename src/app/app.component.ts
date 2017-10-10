import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FollowingComponent } from './following/following.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  private language: String;
  
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute) {
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
  }

  public changeLanguage(language) {

    console.log(language);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(language);
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(language);

    this.language = language;

    DashboardComponent.updateStuff.next(false);
    ProjectListComponent.updateStuff.next(false);
    FollowingComponent.updateStuff.next(false);
    ProjectsComponent.updateStuff.next(false);
    ProjectDetailComponent.updateStuff.next(false);
    
  }

  public showIntroductionAlert() {
    this.translate.get("IntroductionAlert").subscribe(
      key => {
        window.alert(key);
      }
    );
  }


}