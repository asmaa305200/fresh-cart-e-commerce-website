import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private _HttpClient: HttpClient) { }
  getProucts(pageNum:number =1):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNum}`)
  }
  getProductDetails(id:string):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getAllCategories():Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  geCategoriesDetails(id:string):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
  getAlltBrands():Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getBrandsDetails(id:string):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
}
