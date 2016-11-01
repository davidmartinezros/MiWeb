import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './project';

@Pipe({
  name: 'projectPipeFilter',
  pure: false
})
export class ProjectPipeFilterPipe implements PipeTransform {

  transform(projects: Project[], args: any[]): Project[] {

    //console.log('projects:' + projects);

    if (projects == null) {
      return null;
    }

    let tema = args[0].tema;

    //console.log('tema:' + tema);

    if(tema == null) {
      return projects;
    } else {
      tema = tema.toLocaleLowerCase();
    }

    let cercaText = args[0].cercaText;

    //console.log('cercaText:' + cercaText);

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
          || project.html.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.tema.toLocaleLowerCase().indexOf(cercaText) != -1
          || project.link.toLocaleLowerCase().indexOf(cercaText) != -1
        )
      ) : projects;
  }

}
