import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  private language: String;
  
  constructor(private translate: TranslateService) {
    var userLang = navigator.language;
    this.changeLanguage(userLang);
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