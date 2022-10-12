import { Component, OnInit } from '@angular/core';
import { faAws } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  sideNavStatus: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
