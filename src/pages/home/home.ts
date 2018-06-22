import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
UserId:string;
password:string;

  constructor(public navCtrl: NavController,
  public storage:Storage) {

  }
login()
{
this.storage.get('number').then((number) => {
      console.log('Your number is', number);
      if(number == this.UserId ){
alert("login sucess!!");
this.navCtrl.setRoot('MaindashboardPage');
}
else{
alert("Incorrect usrename passowrd");
}
    });


}
register()
{
this.navCtrl.setRoot('SignupPage');
}
}

