import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      {id: 1, titol: 'My first HelloWorld',
      tema: 'Angular2',
      data: '07/10/2016',
      link: 'http://davidmartinezros.com/Angular2/HelloWorld/',
      html: 'My first Angular2 Component that prints something into screen.',
      repositori: 'https://github.com/davidmartinezros/HolaAngular2'},
      {id: 2, titol: 'My first Application Example',
      tema: 'Angular2',
      data: '17/10/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroes/',
      html: `
      This example includes the next objetives:<br/>
      - Use of <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding" target="_blank">event binding</a>.<br/>
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
      tema: 'Angular2',
      data: '18/10/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroesWithCli/',
      html: `
      This example is the same as the <b><a href="/detail/2">2. My first Application Example (17/10/2016)</a></b>.<br/>
      What it's different is than, in this one, I use <a href="https://github.com/angular/angular-cli#creating-a-build" target="_blank">Angular-Cli</a> for generate the project, the components and for build.<br/>
      <a href="https://github.com/angular/angular-cli#creating-a-build" target="_blank">Angular-Cli</a> is in the 17th beta version for the moment, but it feels interesting.<br/><br/>

      With Angular-Cli you can:<br/>
      - Generate your project with a Cli Project Structure.<br/>
      - Generate the elements of your web (Components, Modules, Services, Classes, etc.).<br/>
      - Build the project and <a href="https://github.com/angular/angular-cli#creating-a-build" target="_blank">Angular-Cli</a> generate only the files necessary identifying the developing mode (dev, prod, etc.). This build compact the project and you don't need the node_modules carpet with the dependencies.<br/><br/>

      You can do the example in the next tutorial and with the angular-cli instructions.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me-with-cli'},
      {id: 4, titol: ' My first Application Example with Angular-cli and CRUD',
      tema: 'Angular2',
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
      tema: 'Angular2',
      data: '19/10/2016',
      link: 'http://davidmartinezros.com',
      html: 'I develop my Web with <a href="https://angular.io" target="_blank">Angular2</a> and Typescript, using <a href="https://github.com/angular/angular-cli" target="_blank">Angular-Cli</a>.',
      repositori: 'https://github.com/davidmartinezros/MiWeb'},
      {id: 101, titol: 'My First Example',
      tema: 'Unity',
      data: '10/10/2016',
      link: 'http://davidmartinezros.com/3D/MyFirstScene/',
      html: 'The camera follows the character in a terrain.',
      repositori: null},
      {id: 102, titol: 'My Next Scene Example',
      tema: 'Unity',
      data: '11/10/2016',
      link: 'http://davidmartinezros.com/3D/MySceneWithMoreObjects/',
      html: 'There are three moons with lights and new objects like trees and houses all with textures and shadows.',
      repositori: null},
      {id: 103, titol: 'My First Fisic Example',
      tema: 'Unity',
      data: '12/10/2016',
      link: 'http://davidmartinezros.com/3D/ComportamientoFisico/',
      html: 'In this example you can move the camera dragging the mouse and with the key row up you can throw the ball that collisions with the cube and the action changes the material of the two objects.',
      repositori: null},
      {id: 104, titol: 'A 3D Platform Game Scene',
      tema: 'Unity',
      data: '13/10/2016',
      link: 'http://davidmartinezros.com/3D/PersonMovement/',
      html: `
      In this example, you can see the player and you can move him only in the platform.<br/>
      The camera follows the player (the follows could be do better).<br/>
      The player can walk, run and jump. It want to emulate a Platforms Games (at least initially).
      `,
      repositori: null},
      {id: 105, titol: 'A Texture Shader Example',
      tema: 'Unity',
      data: '17/10/2016',
      link: 'http://davidmartinezros.com/3D/MiFirstShader/',
      html: `
      This example shows three cubes.<br/>
      One with a texture, another with another texture and the middle one with a Shader Texture with 50% of a the first texture and 50% of the second texture.
      `,
      repositori: null},
      {id: 106, titol: 'A Two Cameras Example',
      tema: 'Unity',
      data: '18/10/2016',
      link: 'http://davidmartinezros.com/3D/DifferentsCameras/',
      html: `
      This example shows the screen divided for the middle.<br/>
      On the left side, there's a perspective camera that follows the player always behind him.<br/>
      On the right side, there's a multipurpose perspective camera that follows the player recovering the position behind him.
      `,
      repositori: null},
    ];
    return {projects};
  }
}
