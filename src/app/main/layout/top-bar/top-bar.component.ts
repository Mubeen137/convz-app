import { SocialAuthService } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  currentRoute: string = 'Report 1';
  image: string = 'assets/images/';
  user: any;

  constructor(private router: Router, private auth$: AuthService) {
    
  }

  ngOnInit(): void { 
    this.getUserDetails()
  }

  getUserDetails(){
    let user = localStorage.getItem('user')
    user ? this.user = JSON.parse(user) : '';
  }

  logout(){
    localStorage.clear()
    this.auth$.isLoggedin.next(false)
    this.router.navigateByUrl('/')
  }
}
