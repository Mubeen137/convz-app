import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core.routing.module';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from 'src/environment/environment.prod';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    CoreRoutingModule,
    SocialLoginModule,
  ],
  exports: [],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GoogleClientId),
          },
        ],
      } as SocialAuthServiceConfig
    }
  ]
})
export class CoreModule {}
