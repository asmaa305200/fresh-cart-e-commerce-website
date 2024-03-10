import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/shared/interfaces/brands';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';

@Component({
  selector: 'app-brandsdetails',
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.css']
})
export class BrandsdetailsComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsApiService: ProductsApiService) { }
   brandsId: any = '';
  brandsDetails: Brands = {} as Brands;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.brandsId = params.get('id');
      }
    })
    this._ProductsApiService.getBrandsDetails(this.brandsId).subscribe({
      next: (response) => {
        console.log(response);
        this.brandsDetails = response.data;

     }
   })
  }

}
