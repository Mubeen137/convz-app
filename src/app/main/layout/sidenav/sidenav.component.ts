import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';

interface Menu {
  name: string,
  activeLogo: string,
  inactiveLogo: string,
  route: string
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: Menu[] = [
    {name: 'Report 1', activeLogo: 'assets/icons/report-active.svg', inactiveLogo: 'assets/icons/report-inactive.svg', route: '/app/report-one'},
    {name: 'Report 2', activeLogo: 'assets/icons/report-active.svg', inactiveLogo: 'assets/icons/report-inactive.svg', route: '/app/report-two'}
  ];

  submenus: Menu[] = [
    {name: 'Documentation', activeLogo: 'assets/icons/documentation.svg', inactiveLogo: 'assets/icons/documentation.svg', route: ''},
    {name: 'Support', activeLogo: 'assets/icons/support.svg', inactiveLogo: 'assets/icons/support.svg', route: ''}
  ];

  @Output() open = new EventEmitter<boolean>();
  @Input() opened: boolean = false;

  ngOnInit(): void { }

  openSide(){
    this.opened = !this.opened
    console.log(this.opened);
    this.open.emit(this.opened)
  }
}
