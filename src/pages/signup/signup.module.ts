import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers:[
  DataServiceProvider
  ]
})
export class SignupPageModule {}
