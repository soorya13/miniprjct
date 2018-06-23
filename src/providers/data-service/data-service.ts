import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AppData} from '../../model/data-model';
import {User} from '../../model/user-model';


/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
    appData:User[]=[];
    loggedUser:User={};

  constructor(public storage:Storage) {
    console.log('Initialize');
   
    
  }
  
  public getLoggedUser(){
  return this.loggedUser;
  }
  
  public login(id:number,password:string):boolean{
  console.log("inside login");
  let flag:boolean=false;
  console.log(this.appData.length);
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
    console.log(JSON.stringify(this.appData));
  }
  
 

}
