import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {User} from '../../model/user-model';
import{DataServiceProvider} from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userId:number;
password:string;

  constructor(public navCtrl: NavController,
  public storage:Storage, public dataServiceProvider:DataServiceProvider) {

  }
login()
{
console.log("for user:"+this.userId+"pass:"+this.password);
if(this.dataServiceProvider.login(this.userId,this.password)){
this.navCtrl.setRoot('MaindashboardPage');
}
else {
alert("There is something wrong with the credentials");
}
}

register()
{
this.navCtrl.setRoot('SignupPage');
}
}

