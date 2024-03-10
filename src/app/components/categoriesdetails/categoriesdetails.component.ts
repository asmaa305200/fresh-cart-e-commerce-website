
import { Subcategory } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';

@Component({
  selector: 'app-categoriesdetails',
  templateUrl: './categoriesdetails.component.html',
  styleUrls: ['./categoriesdetails.component.css']
})
export class CategoriesdetailsComponent implements OnInit {


  constructor(private _ActivatedRoute: ActivatedRoute , private _ProductsApiService:ProductsApiService) { }
  categoryId: any = '';
  CategoriesDetails: Categories = {} as Categories;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('id');
      }
    })
    this._ProductsApiService.geCategoriesDetails(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.CategoriesDetails = response.data


    }
  })
  }

}
