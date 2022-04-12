import { Component, Input, SimpleChanges} from '@angular/core';
import { ChartData, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: []
})
export class DonaComponent  {

  @Input() title:string = "Sin titulo"

  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  
  @Input('data') public data:any = [350,455,100];

  @Input('color') colors:any=['#6857E6','#009FEE','#F02059'];

  public doughnutChartData: ChartData<'doughnut'> = {
 
    labels: this.doughnutChartLabels,
    datasets:[{data:this.data,  backgroundColor:this.colors}]
   
  };
  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets:[{ data: this.data,  backgroundColor:this.colors}]
    }
   
  }

}
