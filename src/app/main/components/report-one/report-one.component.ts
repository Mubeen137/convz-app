import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

interface tabModel{
  name: string,
  image: string,
};
@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.scss'],
})
export class ReportOneComponent implements OnInit {
  icons: string = 'assets/icons/';

  tabs: tabModel[] = [
    {name: 'Executive Summary', image: 'assets/images/executive-chart.png'},
    {name: 'Local Content Performance', image: 'assets/images/local-chart.png'}
  ];
  selectedTab: tabModel = this.tabs[0]
  ngOnInit(): void { }

}
