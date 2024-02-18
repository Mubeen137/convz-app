import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

interface tabModel{
  name: string,
  image: string,
};

@Component({
  selector: 'app-report-two',
  templateUrl: './report-two.component.html',
  styleUrls: ['./report-two.component.scss'],
})
export class ReportTwoComponent implements OnInit {
  icons: string = 'assets/icons/';

  tabs: tabModel[] = [
    {name: 'Local Content Score Overview', image: 'assets/images/score-chart.png'},
    {name: 'Local Content Achievements', image: 'assets/images/achievement-chart.png'}
  ];
  selectedTab: tabModel = this.tabs[0]
  ngOnInit(): void { }
}
