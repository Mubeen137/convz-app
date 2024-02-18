import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent{
  currentRoute: any = [];
  @Output() name = new EventEmitter<string>()

  constructor(private router: Router, private route$: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: rt => this.setRoute(rt)
    })
  }

  setRoute(path: any){
    let cpath = path.url.substring(1).split('/')
    let temp = '';
    this.name.emit(this.getName(cpath[cpath.length - 1]))
    this.currentRoute = cpath.map((route: any) =>{
      temp += route + '/'
      return {
        url: temp,
        name: this.getName(route)
      }
    })
  }

  getName(temp: string){
    if(temp == 'app'){
      return 'Home'
    }else if(temp == 'report-one'){
      return 'Report 1'
    }else if(temp == 'report-two'){
      return 'Report 2'
    }else{
      return temp
    }
  }

}
