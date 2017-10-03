import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
})

export class ProjectsComponent implements OnInit {

  cercaText: string;

  titleAngular2: string;
  descriptionAngular2: string;

  title: string;
  description: string;
  
  @Output() update = new EventEmitter();

  constructor(
    private router: Router,
    private translate: TranslateService) { }
  
  ngOnInit(): void {
    //this.this.getTranslation("TitleGroupAngular2");
    this.update.emit('');
  }
/*
  getTranslation(key) {
    this.translate.get(key).subscribe(
      value => {
        return value;
      }
    );
  }
*/
}
