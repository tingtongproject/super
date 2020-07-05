import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpVerificationPage } from './otp-verification';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    OtpVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpVerificationPage),
    NgOtpInputModule
  ],
})
export class OtpVerificationPageModule {}
