import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { utilService } from '../utilities/utils';
import { Constants } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedin = new BehaviorSubject<boolean>(false);
  public loginStatus$ = this.isLoggedin.asObservable()

  constructor(private util: utilService) { 
    this.checkLoginStatus()
  }

  ngOnInit(): void{
  }

  checkLoginStatus(){
    let user = this.util.getFromStore(Constants.user);
    user ? this.isLoggedin.next(true) : this.isLoggedin.next(false)
  }
}
