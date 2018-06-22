import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaindashboardPage } from './maindashboard';

@NgModule({
  declarations: [
    MaindashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(MaindashboardPage),
  ],
})
export class MaindashboardPageModule {}
