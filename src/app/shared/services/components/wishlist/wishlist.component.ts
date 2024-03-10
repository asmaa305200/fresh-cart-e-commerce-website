import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../wishlist.service';
import { product } from 'src/app/shared/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from '../../carts.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private _WishlistService: WishlistService , private _ToastrService:ToastrService , private _CartsService:CartsService) { }
productArr: product[] = []
favData: string[] = []
  ngOnInit(): void {
    this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (response) => {
        console.log(response);
        this.productArr = response.data;
            let newData = response.data.map((item: any) => item._id);
        console.log(newData);
        this.favData = newData;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
    removeFav(id:string): void{
      this._WishlistService.removeProductFromWishlist(id).subscribe({
      next: (response) => {
          console.log(response);
          this._ToastrService.success(response.message);
          this.favData = response.data;

          let newWishlistData = this.productArr.filter((item: any) => this.favData.includes(item._id));
          this.productArr = newWishlistData;
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

}
