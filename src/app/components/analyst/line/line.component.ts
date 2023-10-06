import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
})
export class LineComponent {
  updateFlag = false;
  nameChart: String = '';
  DataChart: any = [];
  dataChart2: any = [];

  Highcharts: typeof Highcharts = Highcharts;


  constructor(private dataSrv: DataService) {
    this.dataSrv.getData().subscribe((res) => {
      this.DataChart = res.data.slice(0, 10).map((i: any) => i.balance);
      this.dataChart2 = res.data.slice(10, 20).map((i: any) => i.balance)
      this.handleUpdate()
    });

  }
  Options_chart: Highcharts.Options = {
    chart: {
      backgroundColor: '#ddd',
    },
    title: {
      text: 'Line - Chart',
      align: 'center',
    },
    // remove link default
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },
    xAxis: {
      // space in column
      tickInterval: 1,
      // description
      accessibility: {
        rangeDescription: 'Range: 2000 to 2010',
      },
    },
    // chú thích
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    // biểu đồ
    series: [
      {
        // selection
        type: 'line',
        data: this.DataChart,
      },
      {
        // selection

        type: 'line',
        data: this.dataChart2,
      },


    ],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2000,
      },
      // show data on point
      line: {
        dataLabels: {
          enabled: false,
        },
      },
    },
  };


  handleUpdate() {
    this.Options_chart.series = [
      {
        // selected
        allowPointSelect: true,
        connectNulls: true,
        color: 'red',
        name: 'Other',
        type: 'line',
        data: this.DataChart,
      },
      {
        // allowPointSelect: true,
        connectNulls: true,
        color: 'green',
        name: 'Installation & Developers',
        type: 'line',
        data: this.dataChart2,
      },
    ];

    this.updateFlag = true;
  }
}
