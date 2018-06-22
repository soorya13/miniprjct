import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaindashboardPage } from '../../pages/maindashboard/maindashboard';


/**
 * Generated class for the CoursedescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedesc',
  templateUrl: 'coursedesc.html',
})
export class CoursedescPage implements OnInit{
time:String;
date:Date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  CoursedescPage(){
  this.navCtrl.setRoot('MaindashboardPage');
  }
  ngOnInit(){
  this.date=new Date();
  setInterval(()=>{
  var now=new Date();
  var h,m,s;
  h=this.check(now.getHours());
  m=this.check(now.getMinutes());
  s=this.check(now.getSeconds());
  this.time=h+":"+m+":"+s;
  },1000)
  }
  check(num)
  {
  if(num<10){
  return '0'+num;
  }
  else{
  return num;
  }
  }
  }
