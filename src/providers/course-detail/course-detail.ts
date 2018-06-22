import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import{ Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the CourseDetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseDetailProvider {

  constructor(public http: Http) {
    console.log('Hello CourseDetailProvider Provider');
  }
  getListDetails(){
return this.http.get("assets/mydata/product.json")
.map((response:Response)=>response.json());
}

}
