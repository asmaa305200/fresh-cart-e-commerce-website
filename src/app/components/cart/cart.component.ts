import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/shared/services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartsService: CartsService) { }
  cartDetails: any = {}
  deletCaartItems(id: string): void{
    this._CartsService.deleteItems(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  UpdateCaartItems(id: string, countNumber: number): void{
    if (countNumber > 0) {
         this._CartsService.updateItems(id, countNumber).subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err);

      }
})
    }

  }

 ngOnInit(): void {
   this._CartsService.getUserLogged().subscribe({
     next: (reponse) => {
       console.log(reponse.data);
       this.cartDetails = reponse.data;
    },
     error: (err) => {
       console.log(err);
    }
   })

 }
  clear(): void{
    this._CartsService.clearCart().subscribe({
      next: (response) => {
        if (response.message === "success") {
          this.cartDetails = 0
        }
      },
    })
  }

}
