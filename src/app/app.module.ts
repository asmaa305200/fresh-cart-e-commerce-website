import { MyHttpInterceptor } from './my-http.interceptor';
import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { LayoutBlankComponent } from './components/layout-blank/layout-blank.component';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingInterceptor } from './loading.interceptor';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CategoriesdetailsComponent } from './components/categoriesdetails/categoriesdetails.component';
import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';
import { WishlistComponent } from './shared/services/components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    RegisterComponent,
    BrandsComponent,
    ProductsComponent,
    FooterComponent,
    DetailsComponent,
    NotFoundComponent,
    NavBlankComponent,
    NavAuthComponent,
    LayoutBlankComponent,
    LayoutAuthComponent,
    LoginComponent,
    SearchPipe,
    CheckOutComponent,
    AllordersComponent,
    ForgetpasswordComponent,
    CategoriesdetailsComponent,
    BrandsdetailsComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS , useClass:MyHttpInterceptor , multi:true
    },
    {
    provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
