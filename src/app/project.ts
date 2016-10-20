export class Project {
  id: number;
  tema: string;
  titol: string;
  data: string;
  link: string;
  text: string;
  repositori: string;
  state: string = 'hidden';
  
  togglestates() {
    this.state = (this.state === 'hidden' ? 'shown' : 'hidden');
  }
}