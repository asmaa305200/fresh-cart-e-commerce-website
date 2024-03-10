import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductsApiService: ProductsApiService) { }
  categoriesData :Categories[]=[]
  ngOnInit(): void {
    this._ProductsApiService.getAllCategories().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categoriesData =response.data;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
