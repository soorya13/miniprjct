import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AppData} from '../../model/data-model';
import {User} from '../../model/user-model';



@Injectable()
export class DataServiceProvider {
    appData:User[]=[];
    loggedUser:User;
    lastUsedId:number;

  constructor(public storage:Storage) {
    console.log('Initialize');
    this.lastUsedId=100;
   
    
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
