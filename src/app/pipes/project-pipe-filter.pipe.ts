import { Pipe, PipeTransform } from '@angular/core';

import { Project } from '../project';

@Pipe({
  name: 'projectPipeFilter',
  pure: false
})
export class ProjectPipeFilter implements PipeTransform {

  transform(projects: Project[], args: any[]): Project[] {

    //console.log('projects:' + projects);

    if (projects == null) {
      return null;
    }

    let tema = args[0].tema;

    //console.log(tema)

    let cercaText = args[0].cercaText;

    //console.log(cercaText)

    if(tema == null) {
      
      if(cercaText == null) {
        return tema ? projects.filter(project=> project.tema.toLocaleLowerCase().indexOf(tema) != -1) : projects;
      } else {
        cercaText = cercaText.toLocaleLowerCase();
      }

      return projects.filter(project=> 
        (
          project.titol.toLocaleLowerCase().indexOf(cercaText) != -1
            || project.tema.toLocaleLowerCase().indexOf(cercaText) != -1
            || project.tipus.toLocaleLowerCase().indexOf(cercaText) != -1
            || project.html.toLocaleLowerCase().indexOf(cercaText) != -1
            || project.tema.toLocaleLowerCase().indexOf(cercaText) != -1
            || project.link.toLocaleLowerCase().indexOf(cercaText) != -1
          )
        );
    } else {
      tema = tema.toLocaleLowerCase();
    }

    if(cercaText == null) {
      return tema ? projects.filter(project=> project.tema.toLocaleLowerCase().indexOf(tema) != -1) : projects;
    } else {
      cercaText = cercaText.toLocaleLowerCase();
    }

    return tema ? projects.filter(project=> 
      (
        project.tema.toLocaleLowerCase().indexOf(tema) != -1) 
        && (
          project.titol.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.tema.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.tipus.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.html.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.tema.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.link.toLocaleLowerCase().indexOf(cercaText) != -1
        )
      ) : projects;
  }

}
