import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from './local.storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public userRoof: UserRoof;
  public userRoofID = '';
  public name = '';
  public errMsg = '';
  public webapiUrl = 'http://localhost:5000/api/';
  // public webapiUrl = 'https://www.enluxsolar.com/ElxAF2Api/api/';

  constructor(private http: HttpClient, private ls: LocalStorage) { }

  getData(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    };
    return this.http.post(url, data, httpOptions);
  }

  getDataJ(url, data, token) {
    const httpOptionsJ = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.post(url, data, httpOptionsJ);
  }

  getLoginStatus() {
    // console.log('getLoginStatus');
    return new Promise(resolve => {
      const gettoken = this.ls.get('token');
      if (gettoken !== 'false') {
        const url = this.webapiUrl + 'Account/CheckLogin';
        const token = this.ls.getObject('token');
        this.getDataJ(url, null, token)
          .subscribe((res) => {
            // console.log(res);
          },
            (error) => {
              // console.log(error);
              if (error.error !== null) {
                this.errMsg = error.error.errMsg;
              } else if (error.status === 401) {
                console.log('登入逾期,請重新登入');
                this.errMsg = '登入逾期,請重新登入';
                this.ls.remove('token');
              } else {
                this.errMsg = error.status + ',' + error.statusText;
                console.log(error);
              }
              resolve(false);
            },
            () => {
              this.errMsg = '';
              resolve(true);
            }
          );
      } else {
        this.errMsg = '遺失登入資訊,請重新登入!';
        console.log(this.errMsg);
        resolve(false);
      }
    });
  }

}
