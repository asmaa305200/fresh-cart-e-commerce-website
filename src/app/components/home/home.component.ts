import { ThisReceiver } from '@angular/compiler';
import { Category } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { product } from 'src/app/shared/interfaces/product';
import { CartsService } from 'src/app/shared/services/carts.service';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productArr: product[] = []
  categories: any[] = []
  searchTerm: string = '';
  favData: string[] = [];
   CategorirsSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
     navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   staticSlider: OwlOptions = {
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
  constructor(private _ProductsApiService: ProductsApiService, private _CartsService: CartsService, private _ToastrService:ToastrService , private _WishlistService:WishlistService) { }
  ngOnInit(): void {
    this._ProductsApiService.getProucts().subscribe({
      next: (response) => {
        console.log(response);
      this.productArr = response.data;
      }
    })

  this._ProductsApiService.getAllCategories().subscribe({
      next: (response) => {
      console.log(response);
      this.categories = response.data;
    }
  })
    this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (response) => {
        console.log(response.data);
        let newData = response.data.map((item: any) => item._id);
        console.log(newData);
        this.favData = newData;

      },
       error: (err) => {
       console.log(err);
    }
    })
  }

 addProductToCart(id:string):void {
   this._CartsService.addToCart(id).subscribe({
     next: (reponse) => {
       console.log(reponse);
       this._ToastrService.success(reponse.message , 'Fresh Cart');
    },
     error: (err) => {
       console.log(err);
    }
  })
 }

  addfav(productId:string): void{
    this._WishlistService.addToWishlist(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.favData = response.data;


      }
    })
  }

  removeFav(id:string): void{
      this._WishlistService.removeProductFromWishlist(id).subscribe({
      next: (response) => {
          console.log(response);
          this._ToastrService.success(response.message);
          this.favData = response.data;
      }
    })
  }
}
