import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartsService } from 'src/app/shared/services/carts.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartsService:CartsService , private _Router:Router) { }

  CheckOut: FormGroup = this._FormBuilder.group({
     details:[''],
     phone:[''],
     city:['']
  })
  cartId: any = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.cartId = param.get('id');
      }
    })
  }

  checkOutFormHandle(): void{
    // console.log(this.CheckOut.value);
    this._CartsService.checkOut(this.cartId, this.CheckOut.value).subscribe({
      next: (response) => {
        console.log(response);

        if (response.status == "success") {
          window.open(response.session.url , '_self')
          // this._Router.navigate(['/home'])
      }
      },
      error: (err) => {
        console.log(err);

      }
    })
 }
}
