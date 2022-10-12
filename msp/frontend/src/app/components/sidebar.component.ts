import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean= false;

  list =[
    {
      number:'1',
      name: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      number:'2',
      name: 'Products',
      icon: 'fa-solid fa-box'
    },
    {
      number:'3',
      name: 'About us',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      number:'4',
      name: 'Contact',
      icon: 'fa-solid fa-gear'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
