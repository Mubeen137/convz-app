import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing.module';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MainComponent } from './main.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { ReportOneComponent } from './components/report-one/report-one.component';
import { ReportTwoComponent } from './components/report-two/report-two.component';

@NgModule({
  declarations: [
    MainComponent,
    SidenavComponent,
    TopBarComponent,
    ReportOneComponent,
    ReportTwoComponent,
  ],
  imports: [CommonModule, SharedModule, MainRoutingModule],
  exports: [],
})
export class MainModule {}
