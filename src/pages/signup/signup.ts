import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
data ={};
userId:string;
password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  register(){
  console.log(this.data);
  this.storage.set('number',this.userId);
  this.storage.set('pass',this.password);

  alert("registered successfully");
  this.navCtrl.setRoot(HomePage);  }

}
