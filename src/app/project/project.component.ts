import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [ 
    /*trigger('visibility', [
        state('in', style({
            height: '*',
            opacity: 1
        })),
        state('out', style({
            height: '0px',
            opacity: 0
        })),
        transition('void => *', [animate(500, style({height: '0px', opacity: 0}))]),
        transition('* => void', [animate(500, style({height: '*', opacity: 1}))])
    ]),*/
    /*trigger('flyInOut', [
      state('in', style({transform: 'translateX(0) scale(1)'})),
      state('out',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out')),
      transition('void => out', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('out => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => in', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('in => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ]),*/
    trigger('animation', [
      transition('void => *', [
        style({transform: 'scale(0)', opacity:0}),
        animate(500, style({transform: 'scale(1)', opacity:1})) 
      ]),
      transition('* => void', [
        animate(500, style({transform: 'scale(0)', opacity:0})) 
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  goLink(): void {
        // Es pot crida amb goLink($event)
        // i s'ha de declarar amb goLink(event): void {
        // una altra manera que no es pot indicar el target=_blank
        //location.href = this.project.link;
        window.open(this.project.link,'_blank');
        event.preventDefault();
    }

    getStyleClass(): string {
      let styleClass = "badge_example";
      if(this.project.tipus === 'Example') {
        styleClass = "badge_example";
      } else if(this.project.tipus === 'Component') {
        styleClass = "badge_component";
      } else if(this.project.tipus === 'Project') {
        styleClass = "badge_project";
      } else if(this.project.tipus === 'Comparative') {
        styleClass = "badge_comparative";
      }
      console.log(styleClass);
      return styleClass;
    }

}
