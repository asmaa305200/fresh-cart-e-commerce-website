import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { LayoutBlankComponent } from './components/layout-blank/layout-blank.component';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CategoriesdetailsComponent } from './components/categoriesdetails/categoriesdetails.component';
import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';
import { WishlistComponent } from './shared/services/components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', canActivate: [authGuard],
    component: LayoutBlankComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch:'full'},
      { path: 'home' , component:HomeComponent , title:'home'},
      { path: 'cart' , component:CartComponent , title:'cart'},
      { path: 'wishlist' , component:WishlistComponent , title:'wish list'},
      { path: 'categories', component: CategoriesComponent , title:'categories'},
      { path: 'categoriesdetails/:id', component: CategoriesdetailsComponent , title:'categories details'},
      { path: 'checkOut/:id', component: CheckOutComponent , title:'checkOut'},
      { path: 'details/:id', component: DetailsComponent, title: 'details' },
      { path: 'allorders', component: AllordersComponent, title: 'allorderes' },
      { path: 'forgetpassword', component: ForgetpasswordComponent, title: 'forgetPassword' },
      { path: 'products' , component:ProductsComponent  , title:'products'},
      { path: 'brands', component: BrandsComponent, title: 'brands' },
      { path: 'brandsdetails/:id', component: BrandsdetailsComponent , title:'brands details'},
    ]},
      {path: '', component: LayoutAuthComponent, children: [
      {path: 'login', component: LoginComponent , title:'login' },
      { path: 'register', component: RegisterComponent, title: 'register' },
      { path: 'forgetpasswordd', component: ForgetpasswordComponent, title: 'forgetPassword' },
  ]
  },
  { path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
