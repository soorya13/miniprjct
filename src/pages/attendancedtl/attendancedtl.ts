import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { User } from '../../model/user-model';
/**
 * Generated class for the AttendancedtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendancedtl',
  templateUrl: 'attendancedtl.html',
})
export class AttendancedtlPage implements OnInit {
  loggedUser:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataServiceProvider:DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancedtlPage');
  }
  ngOnInit(){
    this.loggedUser=this.dataServiceProvider.getLoggedUser();
    
  }
  public homePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
