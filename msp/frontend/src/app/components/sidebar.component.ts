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
      url: 'candidates',
      icon: 'fa-solid fa-house'
    },
    {
      number:'2',
      name: 'Products',
      url: 'candidates',
      icon: 'fa-solid fa-box'
    },
    {
      number:'3',
      name: 'About us',
      url: 'candidates',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      number:'4',
      name: 'Contact',
      url: 'candidates',
      icon: 'fa-solid fa-gear'
    },
    {
      number:'5',
      name: 'Candidates',
      url: 'candidates',
      icon: 'fa-solid fa-users'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
