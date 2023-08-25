import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LH games';
  mostrarMenu: boolean = true;

  constructor(private _loginServie: LoginService){}

  ngOnInit(): void {
    this._loginServie.getMostraMenu().subscribe(
      res => { this.mostrarMenu = res; }
    )
  }

  ngOnDestroy() {
    localStorage.clear();
  }
  
}
