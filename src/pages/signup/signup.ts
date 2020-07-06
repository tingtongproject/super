import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController
    ) {
      this.form = this.formBuilder.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        }
      );
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

  }

  skip()
  {
    this.navCtrl.setRoot('TutorialPage');
  }



}
