import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient: HttpClient) { }
  // headers: any = { token: localStorage.getItem('eToken') }

  addToCart(productNumbrId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      { "productId": productNumbrId },
     )
  }
  getUserLogged(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
     )
  }
  deleteItems(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
     )
  }
  updateItems(productId:string , countNumber:number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { "count": countNumber },
     )
  }

  checkOut(id: string , userData:object): Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
     {shippingAddress:userData},
)
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
  }
}
