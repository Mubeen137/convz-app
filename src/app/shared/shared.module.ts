import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

const materials = [
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
];

const general = [
  BreadCrumbComponent,
];

@NgModule({
  declarations: [
    ...general
  ],
  imports: [
    CommonModule,
    RouterModule,
    GoogleSigninButtonModule,
    ...materials
  ],
  exports: [
    GoogleSigninButtonModule,
    ...general,
    ...materials
  ],
})
export class SharedModule {}
