import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { ForgetPasswordService } from 'src/app/shared/services/forget-password.service';
import { Token } from '@angular/compiler';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  constructor( private _ForgetPasswordService:ForgetPasswordService , private _Router:Router){}
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  resetCodeNum: string = '';
  userMsg: string =''
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('')
  });
  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('')
  });
  resetNewPasswordForm: FormGroup = new FormGroup({
    resetPassword: new FormControl('')
  });

  forgetPassword(): void{
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;
    this._ForgetPasswordService.forgetPassword(userEmail).subscribe({
      next: (response) => {
        this.userMsg = response.message;
        this.step1 = false;
         this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    })
  }


  resetCode(): void{
    let resetCode = this.resetCodeForm.value;
      this.resetCodeNum = resetCode.email;
   this._ForgetPasswordService.resetCode(resetCode).subscribe({
      next: (response) => {
        this.userMsg = response.status;
        this.step2 = false;
         this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    })
  }

    resetPasswordd(): void{
    let newPasswordForm = this.resetNewPasswordForm.value;
    newPasswordForm.email = this.email;
    this._ForgetPasswordService.resetNewPassword(newPasswordForm).subscribe({
      next: (response) => {
        console.log(response)
        // localStorage.setItem("_token", response.token);

      },
      error: (err) => {
        this.userMsg = err.error.message;
        this._Router.navigate(['/login'])
      }

    })
  }
}
