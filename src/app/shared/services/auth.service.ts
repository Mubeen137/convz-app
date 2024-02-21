import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil, timeout } from 'rxjs';
import { utilService } from '../utilities/utils';
import { Constants } from '../utilities/constants';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private unsubscribe: Subject<void> = new Subject();

  public isLoggedin = new BehaviorSubject<boolean>(false);
  public loginStatus$ = this.isLoggedin.asObservable()

  constructor(private router: Router, private googleService: SocialAuthService,) { 
    this.checkLoginStatus()
  }

  ngOnInit(): void{
  }

  logout(){
    localStorage.clear()
    this.setLoginStatus(false)
    this.googleService.signOut()
    this.router.navigateByUrl('/login');
  }

  setLoginStatus(val: boolean){
    this.isLoggedin.next(val)
  }

  checkLoginStatus(){
    let user = localStorage.getItem(btoa(Constants.user));
    console.log(user);
    user ? this.setLoginStatus(true) : this.setLoginStatus(false)
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    localStorage.clear();
  }
}
