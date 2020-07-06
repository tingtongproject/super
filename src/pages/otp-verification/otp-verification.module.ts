import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NgOtpInputModule } from  'ng-otp-input';
import { OtpVerificationPage } from './otp-verification';

@NgModule({
  declarations: [
    OtpVerificationPage
  ],
  imports: [
    IonicPageModule.forChild(OtpVerificationPage),
    NgOtpInputModule
  ],
})
export class OtpVerificationPageModule {}
