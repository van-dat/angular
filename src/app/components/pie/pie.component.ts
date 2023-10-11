import { Component, Output, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
})
export class PieComponent implements OnChanges {
  @Input() chart_name: string = '';
  @Input() data: any = [];
  @Input() typeChart: any = '';
  updateFlag: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['typeChart']) {
      const type = this.typeChart
      this.handleUpdate(type)
    }
  }
  Highcharts: typeof Highcharts = Highcharts;
  Options_Pie: Highcharts.Options = {
    chart: {
      backgroundColor: 'white',
    },

    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    credits: {
      enabled: false,
    },
    

    plotOptions: {

      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        // dataLabels: {
        //   enabled: true,
        //   format: '<b>{point.name}</b>: {point.percentage}%',
        // },
        showInLegend: true,
        innerSize: 50,
      },
      series: {
        label: {
          connectorAllowed: true
        },
      },


    }
  };

  handleUpdate(type: any): void {
    const pieData = this.data.map((item: any) => ({
      name: item.name,
      y: item.activity,
    }));
    this.Options_Pie.title = {
      text: this.chart_name
    }
    this.Options_Pie.series = [
      {
        name: this.chart_name,
        type: type.toString(),
        data: pieData,
      },
    ];
    this.Options_Pie.tooltip =  {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.data.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    this.updateFlag = true;
  }
}
