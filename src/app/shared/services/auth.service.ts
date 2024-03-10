import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient  , private _Router:Router) { }
  userDataa: any;
    saveUserData() {
    if (localStorage.getItem('eToken') != null ) {
      let encodedToken:any =localStorage.getItem('eToken')
      let decodecTken = jwtDecode(encodedToken);
      this.userDataa = decodecTken;
      console.log(decodecTken);
  }
}
  setRegster(userData:object):Observable<any> {
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , userData)
  }
  setLogin(userData:object):Observable<any> {
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , userData)
  }

  logOut(): void{
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login'])

  }
}
