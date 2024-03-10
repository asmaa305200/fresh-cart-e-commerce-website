import { product } from 'src/app/shared/interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';
import { Brands } from './shared/interfaces/brands';
import { Categories } from './shared/interfaces/categories';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productsItems :product[] , term :string): product[] {
    return productsItems.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase())) ;
  }

  // seacrchbrands(productsItems :Brands[] , term :string): Brands[] {
  //   return productsItems.filter((brand)=>brand.name.toLowerCase().includes(term.toLowerCase())) ;
  // }

  // categptries(productsItems :Categories[] , term :string): Categories[] {
  //   return productsItems.filter((category)=>category.name.toLowerCase().includes(term.toLowerCase())) ;
  // }

}
