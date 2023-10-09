import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
})
export class PieComponent  {
  updateFlag = false;
  nameChart: any = 'Số lượng khách';
  dataChart: any = [];
  dataChart2: any = [];
  dataChart1: any = [];


  Highcharts: typeof Highcharts = Highcharts;

  constructor(private dataSrv: DataService) {
    this.dataSrv.getDataPie().subscribe((res) => {
      this.dataChart = res.data.find((i: any) => i.activity === 17);
      this.dataChart2 = res.data.find((i: any) => i.activity === 63);
      this.dataChart1 = res.data.find((i: any) => i.activity === 20);
      this.handleUpdate();
    });
  }
  Options_Pie: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#ddd'
    },
    title: {
      text: 'chart-Pie',
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}<br/> <b>{point.percentage:.1f}%',
      useHTML: true,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage}%',
        },
        showInLegend: true,
        innerSize: 50,
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            y: this.dataChart.activity,
          },
          {
            y: this.dataChart1.activity,
          },
          {
            y: this.dataChart2.activity,
          },
        ],
      },
    ],
  };

  handleUpdate() {
    this.Options_Pie.series = [
      {
        type: 'pie',
        data: [
          {
            color: 'red',
            name: this.dataChart.name,
            y: this.dataChart.activity,
          },
          {
            name: this.dataChart1.name,
            y: this.dataChart1.activity,
          },
          {
            name: this.dataChart2.name,
            y: this.dataChart2.activity,
          },
        ],
      },
    ];

    this.updateFlag = true;
  }
  ngOnDestroy(): void { }
}
