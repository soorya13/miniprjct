import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaindashboardPage } from '../../pages/maindashboard/maindashboard';
import { HomePage } from '../home/home';
import { User } from '../../model/user-model';
import { DataServiceProvider } from '../../providers/data-service/data-service';


/**
 * Generated class for the CoursedescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coursedesc',
  templateUrl: 'coursedesc.html',
})
export class CoursedescPage implements OnInit{
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
