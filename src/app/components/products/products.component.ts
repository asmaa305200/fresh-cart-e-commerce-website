
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartsService } from 'src/app/shared/services/carts.service';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    constructor(private _ProductsApiService: ProductsApiService, private _CartsService: CartsService, private _ToastrService:ToastrService , private _WishlistService:WishlistService) { }
  productArr: product[] = []
  favData: string[] = []
  pageSize: number = 0;
  currentPage: number = 0;
  total: number = 0;
 searchTerm :string=''
  ngOnInit(): void {
     this._ProductsApiService.getProucts().subscribe({
      next: (response) => {
        console.log(response);
      this.productArr = response.data;
      this.pageSize = response.metadata.limit;
      this.currentPage = response.metadata.currentPage;
         this.total = response.results;
          this.productArr = response.data;
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
  pageChanged(event: any): void{
console.log(event);
        this._ProductsApiService.getProucts(event).subscribe({
      next: (response) => {
        console.log(response);
      this.productArr = response.data;
      this.pageSize = response.metadata.limit;
      this.currentPage = response.metadata.currentPage;
         this.total = response.results;
          this.productArr = response.data;
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
