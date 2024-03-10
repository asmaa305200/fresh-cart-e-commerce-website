import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {
  constructor( private _AuthService:AuthService , private _Renderer2:Renderer2) { }
  logOutUser(): void{
    this._AuthService.logOut();
  }
  @ViewChild('navBar') navElmenet!: ElementRef;

  @HostListener('window:scroll')
    onScroll(): void{
    if (scrollY > 500) {
      this._Renderer2.addClass(this.navElmenet.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navElmenet.nativeElement, 'shadow');
    } else {
      this._Renderer2.removeClass(this.navElmenet.nativeElement , 'px-5')
      this._Renderer2.removeClass(this.navElmenet.nativeElement , 'shadow')
 }
  }

}
