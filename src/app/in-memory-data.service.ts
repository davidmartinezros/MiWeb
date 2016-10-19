import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      {id: 1, titol: 'My first HelloWorld',
        data: '07/10/2016',
        link: 'http://davidmartinezros.com/Angular2/HelloWorld/',
        html: 'My first Angular2 Component that prints something into screen.',
        repositori: 'https://github.com/davidmartinezros/HolaAngular2'},
      {id: 2, titol: 'My first Application Example',
        data: '17/10/2016',
        link: 'http://davidmartinezros.com/Angular2/TourOfHeroes/',
        html: `
        This example includes the next objetives:<br/>
        - Use of a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding">event binding</a>.<br/>
        - Use of <a href="https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel">form and ngModel</a> (directive two-way binding).<br/>
        - Uses of css styles and html templates.<br/>
        - List of Heroes.<br/>
        - Use of typescript sentences like <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngFor">nFor</a>.<br/>
        - Detail of a Hero.<br/>
        - Edition of Heroes with id and name.<br/>
        - Service implementation than obtains the list and the detail of heroes from a mock data source.<br/>
        - Navigation with Router parametrized class.<br/><br/>

        You can do the example in the next <a href="https://angular.io/docs/ts/latest/tutorial/">tutorial</a>.
        `,
        repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me'},
    ];
    return {projects};
  }
}
