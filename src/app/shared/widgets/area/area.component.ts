import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions!: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random Data'
      },
      subtitle: {
          text: 'demo'
      },
      xAxis: {
          categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Tunis',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Ariana',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Bizerte',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Sfax',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Manouba',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts); /*for export the data */

    setTimeout(() =>{
      window.dispatchEvent(new Event('resize'));
    },500);


  }
  }


