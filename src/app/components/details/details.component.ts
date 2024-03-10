import { product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartsService } from 'src/app/shared/services/carts.service';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsApiService: ProductsApiService , private _CartsService:CartsService) { }
  productDetais: any = {};
   prdouctsSlideer: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
     navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
 items:1,
    nav: true
   }
   addProductToCart(id:string):void {
   this._CartsService.addToCart(id).subscribe({
     next: (reponse) => {
       console.log(reponse);
    },
     error: (err) => {
       console.log(err);
    }
  })
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=> {
        let productId:any = param.get('id');
        // console.log(productId);
        this._ProductsApiService.getProductDetails(productId).subscribe({
          next: (reponse) => {
            console.log(reponse.data);
            this.productDetais = reponse.data;
        }
        })
    }
  })
  }
}
