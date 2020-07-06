import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {BehaviorSubject}  from "rxjs";
import { MainPage } from '..';

/**
 * Generated class for the OtpVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-verification',
  templateUrl: 'otp-verification.html',
})
export class OtpVerificationPage {

  otp: string;
  time:BehaviorSubject<string> = new BehaviorSubject('00:00')
  timer:number
  timevalue=""
  resend=false;
  interval;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,) {
    this.startTimer(1);
  }

  ionViewDidLoad() {

  }

  onOtpChange(otp) {
    this.otp = otp;
  }
  startTimer(duration:number){
    clearInterval(this.interval)
    this.timer = duration*60;
    this.interval=setInterval(()=>{
      this.updateTimeValue()
    },1000);
  }

  updateTimeValue(){
    let minutes:any=this.timer/60;
    let seconds:any=this.timer%60;
    minutes=String('0'+ Math.floor(minutes)).slice(-2);
    seconds=String('0'+ Math.floor(seconds)).slice(-2);
    const text=minutes +" : "+seconds
    this.time.next(text);
    this.timevalue=this.time.getValue()
    --this.timer;
    if(this.timer<0){
      this.resend=true
      this.timevalue='0:00'
    }
  }
  resendOtp(){
    this.resend=false
    this.startTimer(2);
    
  }
  verifyOtp(){
    if(this.otp.length==4 && this.otp=="1234"){
      this.navCtrl.push(MainPage);
    }
    else{
      let toast = this.toastCtrl.create({
        message: "Please enter valid OTP",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
      
  }
  pop(){
    this.navCtrl.setRoot('SignupPage');
}

}

