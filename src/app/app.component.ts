import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

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
      var userLang = "";
      this.route.params.subscribe(params => {
        userLang = params['lang'];
      });
      if(userLang == "") {
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
  }

  public changeLanguage(language) {

    console.log(language);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(language);
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(language);

    this.language = language;
    
  }


}