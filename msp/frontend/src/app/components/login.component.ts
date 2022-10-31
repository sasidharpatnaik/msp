import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: any = {}
  isValidCredentials = true; 

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var a = {"name":"sasi"}
    console.log(a["name"])
    this.authentication.login(this.loginForm).subscribe(data => {
      this.router.navigateByUrl('dashbord')
    }, error => {
      this.isValidCredentials = false;
    })
  }

}
