import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { User } from '../../model/user-model';
import { Punch } from '../../model/punch-model';
import { ListPage } from '../list/list';


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
export class MaindashboardPage implements OnInit {
  punch:Punch;
  time: string;
  date: Date;
  loggedUser: User;
  punched: boolean = false;
  punchedDay:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider) {

  }
  public homePage() {
    this.navCtrl.setRoot(HomePage);
  }
  public showAttendance(){
    this.navCtrl.setRoot(ListPage);
  }

  ngOnInit() {
    this.punch=new Punch();
    this.loggedUser=this.dataService.getLoggedUser();
    for(let i in this.loggedUser.attendance){
      if(this.loggedUser.attendance[i].inTime){
        this.punched=true;
      }
      if(this.loggedUser.attendance[i].outTime){
        this.punchedDay=true;
      }
    }
    this.date = new Date();
    setInterval(() => {
      var now = new Date();
      var h, m, s;
      h = this.check(now.getHours());
      m = this.check(now.getMinutes());
      s = this.check(now.getSeconds());
      this.time = h + ":" + m + ":" + s;
    }, 1000)
  }
  check(num) {
    if (num < 10) {
      return '0' + num;
    }
    else {
      return num;
    }
  }
  public punchIn() {
    this.punch.date=this.date;
    this.punch.inTime=this.time;
    this.punch.punched=false;
    this.loggedUser.attendance.push(this.punch);
    this.dataService.updateAttendance(this.loggedUser);
    this.punched = true;
  }
  dateAsString(date:Date){
    return date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear();
  }
  public punchOut() {
    console.log('Inside punchout');
    for(let i in this.loggedUser.attendance){
      if(this.dateAsString(this.loggedUser.attendance[i].date)==this.dateAsString(this.date)){
        this.loggedUser.attendance[i].outTime=this.time;
        this.loggedUser.attendance[i].punched=true;
        this.punchedDay=true;
      }
    }
    this.dataService.updateAttendance(this.loggedUser);
  }
}



