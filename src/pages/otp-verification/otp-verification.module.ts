import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    
  ],
  imports: [
    //IonicPageModule.forChild(OtpVerificationPage),
    NgOtpInputModule
  ],
})
export class OtpVerificationPageModule {}
