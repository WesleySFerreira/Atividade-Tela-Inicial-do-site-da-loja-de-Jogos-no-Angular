import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostraMenu = new Subject<boolean>()
  constructor() { }

  login(usuario: string, senha: string): void {
    if(usuario== "admin" && senha== "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(false);
    }
    else {
      this.mostraMenu.next(true);
      alert("Usuário ou senha incorretos")
    }
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
