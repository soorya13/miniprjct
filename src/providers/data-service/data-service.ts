import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AppData} from '../../model/data-model';
import {User} from '../../model/user-model';
import { Punch } from '../../model/punch-model';



@Injectable()
export class DataServiceProvider {
    appData:User[]=[];
    loggedUser:User;
    lastUsedId:number;

  constructor(public storage:Storage) {
    console.log('Initialize');    
    this.populateData();
    this.lastUsedId=100;
   
    
  }
  populateData(){
    let date1:Date=new Date();
    date1.setDate(26);
    date1.setMonth(5);
    date1.setFullYear(2018);
    let date2:Date=new Date();
    date2.setDate(27);
    date2.setMonth(5);
    date2.setFullYear(2018);
    
    let dinesh:User=new User();
    dinesh.id=98;
    dinesh.email='dinesh@gmail.com';
    dinesh.name='Dinesh Kumar S';
    dinesh.mobile='9876543210';
    dinesh.password='pass';
    dinesh.attendance=[];

    let suriya:User=new User();
    suriya.id=99;
    suriya.email='suriya@gmail.com';
    suriya.name='Suriya Prakash B';
    suriya.mobile='9944330420';
    suriya.password='pass';
    suriya.attendance=[];

    let day1:Punch=new Punch();
    day1.date=date1;
    day1.inTime='08:36:22';
    day1.outTime='17:42:10';
    day1.punched=true;
    let day2:Punch=new Punch();
    day2.date=date2;
    day2.inTime='09:36:22';
    day2.outTime='17:22:40';
    day2.punched=true;

    dinesh.attendance.push(day1);
    dinesh.attendance.push(day2);

    suriya.attendance.push(day1);
    suriya.attendance.push(day2);

    this.appData.push(dinesh);
    this.appData.push(suriya);
    
    


  }
  public getLastUsedId(){
    return this.lastUsedId;
  }
  
  public getLoggedUser(){
  return this.loggedUser;
  }
  
  public login(id:number,password:string):boolean{
  console.log("inside login");
  let flag:boolean=false;
  console.log(JSON.stringify(this.appData));
  for(let user of this.appData){
  console.log("inside loop");
  if(user.id==id && user.password==password){
  console.log(user);
  this.loggedUser=user;
  flag=true;
  break;
  }
  else
  {flag=false};
  }
  return flag;
  }
  
  public addUser(user:User){ 
    user.attendance=[];
    this.appData.push(user);
    this.lastUsedId++;
    console.log(JSON.stringify(this.appData));
  }

  public updateAttendance(user:User){
    for(let i in this.appData){
      if(this.appData[i].id==user.id){
        this.appData[i].attendance=user.attendance;
      }
    }
    console.log(JSON.stringify(this.appData));
  }
 

}
