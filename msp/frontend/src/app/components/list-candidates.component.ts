import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css']
})
export class ListCandidatesComponent implements OnInit {

  sideNavStatus: boolean = false;

  public data = [
    { name: 'Ajay', email: 'ajay@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'jas@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'jas.one@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    { name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com' },
  ];

  dtOptions: any = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50],
      processing: true,
      columnDefs: [{
        target: 1,
        visible: false,
      }]
    };

    const menuStatus = sessionStorage.getItem("menuStatus")
    console.log(menuStatus)
    if (menuStatus == "0") {
      this.sideNavStatus = false
    } else {
      this.sideNavStatus = true
    }
  }

}
