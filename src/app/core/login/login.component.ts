import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  images: string = 'assets/images/'
  user: any;
  dashes: any = [1,2,3];
  pic: number = 1;

  constructor(
    private googleService: SocialAuthService, 
    private router: Router,
    private auth$: AuthService,
    ) {
    
  }

  ngOnInit(): void{
    localStorage.clear()
    this.googleService.authState.subscribe((user) =>{
      this.user = user;
      if(this.user) this.login()
    })

    setInterval(() =>{
      this.pic++
      this.pic == 4 ? this.pic = 1 : this.pic = this.pic
    }, 10000)
  }

  login(){
    localStorage.setItem('user', JSON.stringify(this.user))
    this.auth$.isLoggedin.next(true)
    this.router.navigateByUrl('/app/report-one')
  }

  loginwithgoogle(){
    this.googleService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
}
