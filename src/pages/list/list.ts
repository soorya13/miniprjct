import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user-model';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  loggedUser:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataServiceProvider:DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  ngOnInit(){
    this.loggedUser=this.dataServiceProvider.getLoggedUser();
  }
  public homePage(){
    this.navCtrl.setRoot(HomePage);
  }
  
}
