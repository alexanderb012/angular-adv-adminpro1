import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Pan','Refresco','Tacos'];
  public textos: string[] =['Sara', 'Ivette', 'campos'];
  public data1=[10,15,100];
  
  public colors1=['#1232','#4354','#5656'];
 
};


