import { SocialAuthService } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Constants } from 'src/app/shared/utilities/constants';
import { utilService } from 'src/app/shared/utilities/utils';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  currentRoute: string = 'Report 1';
  image: string = 'assets/images/';
  user: any;

  constructor(private router: Router, private auth$: AuthService, private util: utilService) {
    
  }

  ngOnInit(): void { 
    this.getUserDetails()
  }

  getUserDetails(){
    this.user = this.util.getFromStore(Constants.user)
  }

  logout(){
    this.auth$.logout()
  }
}
