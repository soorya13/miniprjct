import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {User} from '../../model/user-model';
import{DataServiceProvider} from '../../providers/data-service/data-service';
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
user:User=new User();
userId:number;
username:string;
email:string;
mobile:string;
password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.userId=this.dataService.getLastUsedId();
  }
  register(){
  this.user.id=this.userId;
  this.user.name=this.username;
  this.user.email=this.email;
  this.user.mobile=this.mobile;
  this.user.password=this.password;
console.log('Trying to signup: '+JSON.stringify(this.user));
  this.dataService.addUser(this.user);
  alert("Registered Successfully.Please remember your login User ID: "+this.user.id);
  this.navCtrl.setRoot(HomePage);  }

}
