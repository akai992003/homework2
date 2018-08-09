import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { LocalStorage } from '../local.storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pwd = '';
  message = '';
  constructor(
    private datasvc: DataService,
    private router: Router,
    private ls: LocalStorage) { }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.getLogin();
    }
  }
  getLogin() {
    if (this.email === '') {
      this.message = '請輸入帳號';
    }
    if (this.pwd === '') {
      this.message = '請輸入密碼';
    }
    const data = {
      email: this.email,
      pwd: this.pwd
    };
    const url = this.datasvc.webapiUrl + 'account/login';
    this.datasvc.getData(url, data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.message = '成功';
      }
    );

  }
}
