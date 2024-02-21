import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    CoreRoutingModule,
  ],
  exports: [],
  providers: []
})
export class CoreModule {}
