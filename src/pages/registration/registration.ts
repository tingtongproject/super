import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController} from 'ionic-angular';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
country:any;
image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetController: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  
  async presentActionSheet(item) {
    this.image = '<img src="imgs/indiaflag.png"/>'
    const actionSheet = await this.actionSheetController.create({
     // header: 'Albums',
     title:'Select a country',
      cssClass: 'my-custom-class',
     
      buttons: [{
        text: 'India(+91)',
       // role: 'destructive',
       icon: 'indiaflag',
     //  cssClass:"class_used_img",
        handler: () => {
         this.country = '+91'
          console.log(item);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
