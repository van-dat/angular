import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


interface Chart {
  chart: String;
  value: String;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  data: any
  dataChart: any
  myChartName: string = 'chart'

  // 
  cities: Chart[] = [];
  selectedChart: any;
  constructor(private dataSrv: DataService) {
  }
  ngOnInit(): void {
    this.cities = [
      { chart: 'pie', value: 'pie' },
      { chart: 'spline', value: 'spline' },
      { chart: 'column', value: 'column' },
      { chart: 'line', value: 'line' },
    ];
    this.dataSrv.getDataPie().subscribe((res) => {
      this.data = res?.data?.filter((i: any) => i.activity === 17 || i.activity === 63 || i.activity === 20);
      this.dataChart = []
      for (const item of this.data) {
        const nameValue = item.name;
        const activityValue = item.activity;
        this.dataChart.push({ name: nameValue, activity: activityValue });
      }
    });
  }
  getValue(value: string): void {
    this.selectedChart = value.toString()
  }

}
