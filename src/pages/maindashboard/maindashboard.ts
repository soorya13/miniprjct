import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseDetailProvider } from '../../providers/course-detail/course-detail';

/**
 * Generated class for the MaindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maindashboard',
  templateUrl: 'maindashboard.html',
})
export class MaindashboardPage implements OnInit{
time:String;
date:Date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public coursedetail:CourseDetailProvider) {
  
}
MaindashboardPage()
{
this.navCtrl.setRoot('CoursedescPage');
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



