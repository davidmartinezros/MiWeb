import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
})

export class ProjectsComponent implements OnInit {

  cercaText: string;
  
  @Output() update = new EventEmitter();

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.update.emit('');
  }

}
