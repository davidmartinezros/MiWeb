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
      - Use of a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding" target="_blank">event binding</a>.<br/>
      - Use of <a href="https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel" target="_blank">form and ngModel</a> (directive two-way binding).<br/>
      - Uses of css styles and html templates.<br/>
      - List of Heroes.<br/>
      - Use of typescript sentences like <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngFor" target="_blank">nFor</a>.<br/>
      - Detail of a Hero.<br/>
      - Edition of Heroes with id and name.<br/>
      - Service implementation than obtains the list and the detail of heroes from a mock data source.<br/>
      - Navigation with Router parametrized class.<br/><br/>

      You can do the example in the next <a href="https://angular.io/docs/ts/latest/tutorial/" target="_blank">tutorial</a>.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me'},
      {id: 3, titol: 'My first Application Example with Angular-Cli',
      data: '18/10/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroesWithCli/',
      html: `
      This example is the same as the <b><a href="/detail/2">2. My first Application Example (17/10/2016)</a></b>.<br/>
      What it's different is than, in this one, I use Angular-cli for generate the project, the components and for build.<br/>
      <a href="https://github.com/angular/angular-cli#creating-a-build" target="_blank">Angular-Cli</a> is in the 17th beta version for the moment, but it feels interesting.<br/><br/>

      With Angular-Cli you can:<br/>
      - Generate your project with a Cli Project Structure.<br/>
      - Generate the elements of your web (Components, Modules, Services, Classes, etc.).<br/>
      - Build the project and <a href="https://github.com/angular/angular-cli#creating-a-build" target="_blank">Angular-Cli</a> generate only the files necessary identifying the developing mode (dev, prod, etc.). This build compact the project and you don't need the node_modules carpet with the dependencies.<br/><br/>

      You can do the example in the next tutorial and with the angular-cli instructions.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me-with-cli'},
      {id: 4, titol: ' My first Application Example with Angular-cli and CRUD',
      data: '18/10/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroesWithCliCRUD/',
      html: `
      This example is the same as the <b><a href="/detail/3">3. My first Application Example with Angular-cli (18/10/2016)</a></b>.<br/>
      Here is implemented the edition, deleting and searching of a heroe.<br/><br/>

      You can:<br/>
      - Edit a hero in the detail of a hero.<br/>
      - Delete a hero in the list of heroes.<br/>
      - Search a hero in the dashboard.<br/><br/>
      
      You can do the example in the next <a href="https://angular.io/docs/ts/latest/tutorial/toh-pt6.html" target="_blank">tutorial</a>.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me-with-cli'},
      {id: 5, titol: 'My Web',
      data: '07/10/2016',
      link: 'http://davidmartinezros.com',
      html: 'I develop my Web with <a href="https://angular.io" target="_blank">Angular2</a> and Typescript, using <a href="https://github.com/angular/angular-cli" target="_blank">Angular-Cli</a>.',
      repositori: 'https://github.com/davidmartinezros/MiWeb'},
    ];
    return {projects};
  }
}
