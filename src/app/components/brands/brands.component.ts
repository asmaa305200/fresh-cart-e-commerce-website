import { ProductsApiService } from 'src/app/shared/services/products-api.service';
import { Brand } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  BrandsData: Brand[] = []
   searchTerm :string=''
  constructor(private _ProductsApiService: ProductsApiService) { }
  ngOnInit(): void {
    this._ProductsApiService.getAlltBrands().subscribe({

      next: (response) => {
        console.log(response.data);
        this.BrandsData =response.data

      }
    })
  }
}
