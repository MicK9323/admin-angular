import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    init_plugins();
  }

  public login() {
    this._router.navigate(['/dashboard']);
  }

}
