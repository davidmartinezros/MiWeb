import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './project';

@Pipe({
  name: 'projectPipeFilter',
  pure: false
})
export class ProjectPipeFilterPipe implements PipeTransform {

  transform(projects: Project[], tema: string): Project[] {

    if (projects == null) {
      return null;
    }
    
    let filter = tema.toLocaleLowerCase();;

    return filter ? projects.filter(project=> project.tema.toLocaleLowerCase().indexOf(filter) != -1) : projects;
  }

}
