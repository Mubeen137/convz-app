import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedin = new BehaviorSubject<boolean>(false);
  public loginStatus$ = this.isLoggedin.asObservable()

  constructor() { 
    this.checkLoginStatus()
  }

  ngOnInit(): void{
  }

  checkLoginStatus(){
    let user = localStorage.getItem('user')
    user ? this.isLoggedin.next(true) : this.isLoggedin.next(false)
  }
}
