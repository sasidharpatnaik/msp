import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus
    console.log(this.menuStatus)
    if(this.menuStatus) {
      sessionStorage.setItem("menuStatus","1")
    }else {
      sessionStorage.setItem("menuStatus","0")
    }
    this.sideNavToggled.emit(this.menuStatus)
  }

}
