import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-project-dashboard-overview',
  templateUrl: './project-dashboard-overview.component.html',
  styleUrls: ['./project-dashboard-overview.component.scss']
})
export class ProjectDashboardOverviewComponent {
  public doughnutChartLabels: string[] = [ 'todo', 'Pending', 'Done' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 10, 20, 120 ] },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };
}
