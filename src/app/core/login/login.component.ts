import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Constants } from 'src/app/shared/utilities/constants';
import { utilService } from 'src/app/shared/utilities/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private unsubscribe: Subject<void> = new Subject();
  images: string = 'assets/images/';
  user: any;
  dashes: any = [1,2,3];
  pic: number = 1;

  constructor(
    private googleService: SocialAuthService, 
    private router: Router,
    private auth$: AuthService,
    private util: utilService,
    ) {
    
  }

  ngOnInit(): void{
    localStorage.clear()
    this.googleService.authState.pipe(takeUntil(this.unsubscribe))
    .subscribe((user) =>{
      this.user = user;
      if(this.user) this.login()
    })
    setInterval(() =>{
      this.pic++
      this.pic == 4 ? this.pic = 1 : this.pic = this.pic
    }, 10000)
  }

  login(){
    this.util.saveToStore(Constants.user, this.user)
    console.log(this.user);
    this.auth$.setLoginStatus(true)
    this.router.navigateByUrl('/app/report-one')
    this.unsubscribe.complete()
  }

  loginwithgoogle(){
    this.googleService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
}
